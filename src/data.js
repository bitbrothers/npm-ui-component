import logo from './assets/logo.svg';
import fuser1 from './assets/avatar-female-1.jpg';
import fuser2 from './assets/avatar-female-2.jpg';
import fuser3 from './assets/avatar-female-3.jpg';
import fuser4 from './assets/avatar-female-4.jpg';
import fuser5 from './assets/avatar-female-5.jpg';
import fuser6 from './assets/avatar-female-6.jpg';

import muser1 from './assets/avatar-male-1.jpg';
import muser2 from './assets/avatar-male-2.jpg';
import muser3 from './assets/avatar-male-3.jpg';
import muser4 from './assets/avatar-male-4.jpg';
import muser5 from './assets/avatar-male-5.jpg';
import muser6 from './assets/avatar-male-6.jpg';

const data = {
    common:{
        logo: logo,
        user: fuser1,
        users:[
          {name:'Clarence', src: fuser1},
          {name:'Peggy', src: fuser2},
          {name:'Sally', src: fuser3},
          {name:'Kristina', src: fuser4},
          {name:'Claire', src: fuser5},
          {name:'Kerri', src: fuser6},
          {name:'Marcus', src: muser1},
          {name:'Matt', src: muser2},
          {name:'John', src: muser3},
          {name:'Harry', src: muser4},
          {name:'Ravi', src: muser5},
          {name:'David', src: muser6},
        ]
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
    },
    pages:{
      projectpage:{
        users:[
          {name:'Clarence', src: fuser1},
          {name:'Matt', src: muser2},
          {name:'John', src: muser3}
        ],
        nav:[
          {name:'Tasks',active: true},
          {name:'Files'},
          {name:'Activity'}
        ],
        tasks:{},
        files:{},
        activity:{}
      }
    }
}

export default data;
