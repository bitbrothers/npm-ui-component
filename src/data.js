import logo from './assets/logo.svg';
import user from './assets/avatar-female-2.jpg';

const data = {
    common:{
        message: "Hello this is a component!",
        title: "Main Title",
        author: "Krish Vora",
        date: "28th December",
        logo: logo,
        user: user
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
        quicklinks:[
          {
            title: 'Team Overview',
            linkto: '/'
          },
          {
            title: 'Project',
            linkto: '/'
          },
          {
            title: 'Single Task',
            linkto: '/'
          },
          {
            title: 'Kanban Board',
            linkto: '/'
          },
        ],
    }
}

export default data;
