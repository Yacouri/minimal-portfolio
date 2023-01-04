export {};

declare global {
  type TResponse = TArticles;
  type TArticle = {
    id: number;
    title: string;
    description: string;
    readable_publish_date: "Apr 13 '22";
    slug: string;
    cover_image: string;
    social_image: string;
    created_at: string;
    published_at: "2022-04-13T11:59:17Z";
    reading_time_minutes: 2;
    tag_list: string[];
    // user: {
    //   name: "Zouhir Yaçouri";
    //   username: "yacouri";
    //   twitter_username: "ZYacouri";
    //   github_username: "Yacouri";
    //   user_id: 846801;
    //   website_url: "https://yacouri.com";
    //   profile_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--xGN_My-H--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/846801/5d43e504-b411-4318-bc88-0965a5ea2b25.jpg";
    //   profile_image_90: "https://res.cloudinary.com/practicaldev/image/fetch/s--k8urvdVX--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/846801/5d43e504-b411-4318-bc88-0965a5ea2b25.jpg";
    // };
  };
  type TArticles = { articles: TArticle[] };
}
