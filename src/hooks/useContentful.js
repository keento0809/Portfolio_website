import { createClient } from "contentful";

const useContentful = () => {
  // declare client
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    host: process.env.REACT_APP_CONTENTFUL_HOST,
  });

  const getResume = async () => {
    try {
      const entry = await client.getEntries({
        content_type: "resume",
        select: "fields",
      });
      const resumeUrl =
        "https:" + entry.items[0].fields.myResume.fields.file.url;
      return resumeUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const getProjectImages = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "thumbnail",
        select: "fields",
        order: "sys.createdAt",
      });
      const hash = {};
      entries.items.forEach((item) => {
        const title = item.fields.img.fields.title;
        const image = item.fields.img.fields.file.url;
        if (hash[title] === undefined) hash[title] = image;
      });
      return hash;
    } catch (error) {
      console.log(error);
    }
  };

  const getProjectInfo = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "project",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return item.fields.projectData[0];
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(error);
    }
  };

  const getDataArray = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "dataArray",
        select: "fields",
        order: "sys.createdAt",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return item.fields;
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(error);
    }
  };

  const getSkillSetList = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "skillSetList",
        select: "fields",
        order: "sys.createdAt",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return item.fields;
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileImage = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "profileImage",
        select: "fields",
      });
      return "https:" + entries.items[0].fields.image.fields.file.url;
    } catch (error) {
      console.log(error);
    }
  };

  const getAboutMeDescription = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "descriptions",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        return item.fields;
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getResume,
    getProjectImages,
    getProjectInfo,
    getDataArray,
    getSkillSetList,
    getProfileImage,
    getAboutMeDescription,
  };
};

export default useContentful;
