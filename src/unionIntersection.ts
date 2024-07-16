{
    //Union type
    type Id = number | string;
    const id: Id = 3;

    type Gender = 'Male' | 'Female';
    const gender: Gender = 'Male';

    // Intersection type
    type FrontendDev = {
        skill: string[];
        des1: 'frontend developer'
    }
    type BackendDev = {
        skill: string[];
        des2: 'Backend developer'
    }

    type FullstackDeveloper = FrontendDev & BackendDev;

    const fullstackDeveloper : FullstackDeveloper ={
        skill: ['html', 'css', 'js'],
        des1: 'frontend developer',
        des2: 'Backend developer',
    }
}