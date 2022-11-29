import { createClient } from "contentful";

const useContentful = () => {
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
  const getProjectInfo = () => {
    console.log("img");
  };
  return { getResume, getProjectImages, getProjectInfo };
};

export default useContentful;
