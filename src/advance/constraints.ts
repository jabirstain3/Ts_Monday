{
    //constrains
    const addcoursetoStudent = <T extends { id: number; nmae: string; email: string;}>(student: T) =>{

        const course ="Next Label web dev";
        return{
            ...student,
            course,
        };
    };

    const student1 = addcoursetoStudent({
        id:222,
        nmae:"x",
        email:"x@gmail.com",
        devType: "NLWD",
    });

    const student2 = addcoursetoStudent({
        id: 5743,
        nmae:"y",
        email:"y@gmail.com",
        hasWatch:"rolex"
    });

    // const student3 = addcoursetoStudent({
    //     amni:"amni"
    //     id: 5743,+
    //     nmae:"y",
    //     email:"y@gmail.com",
    //     hasWatch:"rolex"
    // });
    
}