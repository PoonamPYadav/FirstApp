app.service("myservices",function(){

    this.getary = function(){
   return [{
        Id: 1,
        Driver: {
          givenFname: 'Poonam',
          givenLname: 'Yadav'
        },
        points: 320,
        flag:'../assets/img/india.png',
        Constructors: [{
          country: 'India',
          birth:'11/11/1994'
        }]


      },
      {
        Id: 2,
        Driver: {
          givenFname: 'Priyanka',
          givenLname: 'Tapadiya'
        },
        points: 420,
        flag:'../assets/img/norway.png',
        Constructors: [{
          country: 'Norway',
          birth:'1/12/1994'
        }]


      },
      {
        Id: 3,
        Driver: {
          givenFname: 'Parag',
          givenLname: 'Poddar'
        },
        points: 220,
        flag:'../assets/img/england.png',
        Constructors: [{
          country: 'England',
          birth:'5/11/1994'
        }]


      }

    ];
}



});
