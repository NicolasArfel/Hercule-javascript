const app ={
    entity: {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true,
    },
    friends: [
        'Jupiter',
        'Junon',
        'Alcmène',
        'Déjanire'
    ],

    init: function() {
        base.fillProfil(app.entity);
        base.printFriends(app.friends);
        base.setBestFriend(app.friends[0]);
        app.generateH1();
        app.displayWorks();
        app.disponibility();
        app.createPseudo();
        app.activateSideNav();
        app.formEvent();
        app.generatePercentBar();
        app.generateActivitiesList();
    },
    
    // creation of a title
    generateH1: () => {
        const titleEl = document.createElement('h1');
        titleEl.classList.add('banner__title');
        titleEl.textContent ='Vous consultez le profil de Hercule';
        document.querySelector('#header-banner').appendChild(titleEl);
    },
    // display all Hercule's works
    displayWorks: () => {
        const number = 12;
        
        for(i = 0; i < number; i++) {
            base.displayWork(i);
        }
    },
    // diponibility 
    disponibility: () => {
        let time = base.getHour();
        
        const availabilityEl = document.querySelector('#availability');
        if (time >= 8 && time <= 20){
            availabilityEl.textContent = 'Disponible'
        } else {
            availabilityEl.classList.add('off')
        }
    },
    // create a pseudo with the name and department
    createPseudo: () => {
        function createPseudo(name, department) {
            return `${name}-du-${department}`
        }
        let pseudo = createPseudo(app.entity.name, app.entity.department);
        
        const profilEl = document.querySelector('#profil-name');
        profilEl.textContent = pseudo;
    },
    // sidenav
    activateSideNav: () => {
        const menuEl = document.querySelector('#menu-toggler')
        const headerBannerEl = document.querySelector('#header-banner')
        menuEl.addEventListener('click', () => {
            const className = 'banner--open';
            if(headerBannerEl.classList.contains(className)) {
                headerBannerEl.classList.remove(className)
            } else {
                headerBannerEl.classList.add(className)
            }
        })
    },
    // form contact
    formEvent: () => {
        const contactEl = document.querySelector('#contact');
        contactEl.addEventListener('submit', (event) => {
            // do not refresh the page
            event.preventDefault();
            alert('Hercule ne souhaite pas être dérangé')
        })
    },
    // votes !
    generatePercentBar: () => {
        const herculeVotes = base.vote.hercule;
        const cesarVotes = base.vote.cesar;
        
        let total = herculeVotes + cesarVotes;
        console.log(total);
        
        const herculeEl = document.querySelector('#trends-hercule');
        const cesarEl = document.querySelector('#trends-cesar');
        let herculeValue = Math.round(herculeVotes / total * 100)+ '%'
        let cesarValue = Math.round(cesarVotes / total * 100)+ '%'
        // percentage
        herculeEl.querySelector('.people__popularity').textContent = herculeValue;
        cesarEl.querySelector('.people__popularity').textContent = cesarValue;
        
        // style percentBar
        herculeEl.querySelector('.people__bar').style.width = herculeValue;
        cesarEl.querySelector('.people__bar').style.width = cesarValue;
    },
    // generate activities list if true
    generateActivitiesList: () => {
        const activitiesEl = document.querySelector('#activities');
        activitiesEl.classList.remove('hidden')
        const tasksEl = document.querySelector('.tasks')
        let activities = [...base.activities];
        activities.map((activity) => {
            const liEl = document.createElement('li');
            if(activity.finished === true) {
                liEl.textContent = activity.title;
                tasksEl.appendChild(liEl)
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', app.init);

