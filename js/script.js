const { createApp } = Vue


createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentIndex: "",
            activeContact: {},
            newMessage: "",
            newSearchContact: "",
            welcomeMsg: true,
            isTyping: false,
            newContact: [],

            cpuResponse: [
                "Messaggio1",
                "Messaggio2",
                "Messaggio3",
                "Messaggio4",
                "Messaggio5",
                "Messaggio6",
                "Messaggio7",
                "Messaggio8",
                "Messaggio9",
                "Messaggio10",
                "Messaggio11",
                "Messaggio12",
                "Messaggio13",
                "Messaggio14",
            ]
        }
    },
    methods: {
        // show single msg contacts, search on list contacts and welcome msg
        showChat(index) {
            this.currentIndex = this.contacts.indexOf(this.newSearch[index])
            this.activeContact = this.contacts[this.currentIndex];
            this.welcomeMsg = false;
        },

        // function that will send user and computer msgs
        sendMessage() {
            const userTarget = this.activeContact;

            const newMsgObject = {
                message: this.newMessage,
                status: 'sent',
                date: new Date().toLocaleString("it-IT"),
            };
            if (this.newMessage.length != 0 && this.newMessage.trim()) {
                userTarget.messages.push(newMsgObject);
                this.newMessage = "";
                this.scrollToBottom();

                // temporary solution
                setTimeout(() => {

                    const newUserMsg = {
                        message: this.randomResponse(),
                        status: 'received',
                        date: new Date().toLocaleString("it-IT"),
                    }
                    userTarget.messages.push(newUserMsg);
                    this.scrollToBottom();

                }, 3000);
                this.newMessage = "";
                this.isTyping = false;
            }

        },
        // function that will convert time with just hours and minutes
        convertTime(cioa) {
            const justTime = cioa.date.split(" ")[1]
            return justTime.split(":").slice(0, 2).join(":");
        },

        // this function checks if user is typing and change the icon near to the input
        userIsTyping() {
            if (this.newMessage.length != 0 && this.newMessage.trim()) {
                this.isTyping = true
            }
            return this.isTyping == true ? `fa-solid fa-paper-plane` : `fa-solid fa-microphone`;
        },

        // won't work properly, it needs to be fixed
        deleteMessage(current, index) {
            current.messages.splice(index, 1)
        },

        deleteAllMessages(current) {
            current.messages.splice(0, current.messages.length);
        },

        deleteConversation(current) {
            this.contacts[0].splice(0, this.contacts[0].length)
        },



        // this function uses nextTick to scrollPage
        scrollToBottom() {
            const targetRef = this.$refs.scrollPage;
            this.$nextTick(() => {
                targetRef.scrollTo(
                    {
                        top: targetRef.scrollHeight,
                        left: 0,
                        behavior: "smooth"
                    }
                );
            });
        },
        // generate a random response for the user msg
        randomResponse() {
            let number = Math.floor(Math.random() * this.cpuResponse.length);
            return this.cpuResponse[number];
        },

        // add a new contact, won't work properly, it needs to be fixed, i cannot add a new contact without a message inside, this is related with the deleteMessage error function 
        addContact() {

            if (this.newContact.length != 0 && this.newContact.trim()) {
                this.contacts.push({
                    name: this.newContact,
                    avatar: './img/generic-avatar.png',
                    visible: true,
                    messages: [
                        {
                            date: new Date().toLocaleString("it-IT"),
                            message: " ",
                        }
                    ]
                }),
                    this.newContact = "";
            }

        },
    },
    computed: {
        // this function will search inside contacts object the names 
        newSearch() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.newSearchContact.toLowerCase());
            })
        },
    },
    mounted() {

    },


}).mount('#app');



