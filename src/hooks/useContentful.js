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
  // const getProjectImages = async () => {
  //   try {
  //     const entriesData = await client.getEntries({
  //       content_type: "Project_image",
  //       select: "fields",
  //     });
  //     const entries = entriesData.items;
  //     return entries;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return { getResume };
};

export default useContentful;
