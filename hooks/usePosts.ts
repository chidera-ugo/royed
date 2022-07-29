export const usePosts = (res: any[]) => {
  const posts = res.map(
    ({
      first_publication_date,
      uid,
      data: {
        title,
        content,
        bannerImage: { url, alt },
        author: {
          slug,
          data: { fullName },
        },
      },
    }) => {
      return {
        createdAt: first_publication_date,
        uid,
        title,
        content,
        bannerImage: {
          url,
          alt,
        },
        author: {
          slug,
          fullName,
        },
      };
    }
  );

  return { posts };
};
