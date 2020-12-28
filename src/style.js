const style = {
    common:{
        message: "Hello this is a component!",
        title: "Main Title",
        author: "Krish Vora",
        date: "28th December"
    },
    components:{
        mainmenu: [
            {
              title: "Overview", 
              active: true
            },
            { 
              title: "Pages",
              submenu: [
                {
                  title: 'App Pages'
                }, 
                {
                  title:'Utility Pages'
                }, 
                {
                  title:'Layouts'
                }
              ]
            },
            { 
              title: "Components",
              submenu: [
                {
                  title: 'Bootstrap'
                }, 
                {
                  title:'Pipeline'
                }
              ]
            },
            {
              title: "Documentation"
            },
            {
              title: "Changelog"
            }
          ],
    }
}

export default style;
