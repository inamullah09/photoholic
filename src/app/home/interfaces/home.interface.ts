export interface IPhotographers {
    profileID: number
    profileTitle: string,
    profileAbout: string,
    pofilePicture: string
  }

  export interface ISkill {
    skillName: string;
  }
  
  export interface IPackage {
    pakageId: number;
    name: string;
    description: string;
    hours: number;
    price: number;
  }
  
  export interface IImage {
    imageUrl: string;
  }
  
  export interface IPhotographer {
    title: string;
    about: string;
    phone: string;
    location: string;
    webLink: string;
    skills: ISkill[];
    pakages: IPackage[];
    images: IImage[];
  }
  