const BPS_TEAM: Record<string, AuthorDetails> = {
    ryan: {
      name: "Ryan W. Januardi",
      instagramUsername: "kohryanwj",
      picture: "/people/ryan.png",
    }
  };
  
  export type Author = keyof typeof BPS_TEAM;
  export type AuthorDetails = {
    name: string;
    instagramUsername?: string;
    picture: string;
  };
  
  export default BPS_TEAM;
  