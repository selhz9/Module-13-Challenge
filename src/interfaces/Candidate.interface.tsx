// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    
    avatar_url: string;
    login: string;
    location: string; 
    company: string;  
    email?: string; 
    bio: string;
  }