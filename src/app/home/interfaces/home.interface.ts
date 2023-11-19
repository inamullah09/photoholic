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
  
  export interface IOrder {
    email: string;
    pakageId: number;
    totalOrders: number;
    ammount: string; 
    serviceRequiredOn: string;
  }

  export interface ICreatePackage {
    profileId: number;
    pakageName: string;
    description: string;
    hours: number;
    price: number;
  }

  export interface IImage {
    name: string;
    file: File;
  }

  export interface IOrders {
    packageName: string;
    description: string;
    hours: number;
    price: number;
    orderId: number;
    totalOrders: number;
    totalAmount: string;
    clientEmail: string;
    clientName: string;
  }
  
  export interface ICreatePhotographer {
    email: string;
    title: string;
    about: string;
    phone: string;
    location: string;
    webLink: string; 
}