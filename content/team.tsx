const BPS_TEAM: Record<string, AuthorDetails> = {
    ryan: {
      name: "Ryan W. Januardi",
      jabatan: "Statistisi Ahli Pertama",
      picture: "/people/ryan.png",
    },
    robert: {
      name: "J. Robert, ST, MT.",
      jabatan: "Kepala Bappeda Sulawesi Tenggara",
      picture: "/people/robert.png",
    }
  };
  
  export type Author = keyof typeof BPS_TEAM;
  export type AuthorDetails = {
    name: string;
    jabatan: string;
    picture: string;
  };
  
  export default BPS_TEAM;
  