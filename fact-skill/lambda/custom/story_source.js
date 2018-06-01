"use strict";

module.exports= {

  dataByType: function dataByType(input){
    const list = [];
    for (let i = 0; i < data.storys.length; i += 1) {
        if (data.storys[i].type.search(input) > -1) {
            list.push(data.storys[i]);
        }
    }
    return list;
  },

  dataByName: function dataByName(input){
        var list;
        for (let i = 0; i < data.storys.length; i += 1) {
            if (data.storys[i].name==input) {
                list=data.storys[i];
            }
    }
        return list;
    }
}

const data={
    name: 'Mickey Mouse',
    company: 'Disney',
    storys: [
        {
            name: 'Mickey\'s toy story',
            type: 'long story',
            description: 'Mickey was a mouse. He had many toys. \
            He used to spread them all around his room. “Mickey put your toys at their right place. Some guests are coming today,” \
            said his mother. Mickey quickly started gathering his toys. Minnie mouse was Mickey’s friend.\
            She came running. He called Minnie inside and they started playing. “Hey Mickey! Let’s go out and play,” Minnie said.\
            Mickey ran to play and told  Minnie to wait.  After some time, the guests came. “Come in Mickey! The guests are here,” said mummy. \
            The guests brought gifts for him. “This is for you Mickey,” uncle said. Mickey said thanks to Uncle and Aunty. \
            Mickey opened the gifts. It was a beautiful toy train. “Come Minnie, let’s play!” Mickey said. Uncle tumbled over a toy. \
            He fell down. “Oooh! Aaaah!” Uncle cried in pain. “Mickey, look your Uncle could have been seriously hurt,” said the angry mother.\
            Mickey held both his ears and said sorry to Uncle.“That’s all right Mickey! Next time, remember to put your toys at the right place!”\
            Uncle advised him. From then, Mickey Mouse always kept his toys at their places.'
        },
        {
            name: 'Mickey\'s story two',
            type: 'long story',
            description: 'story 2'
        },
        {
            name: 'Mickey\'s story three',
            type: 'long story',
            description: 'story 3'
        },
        {
            name: 'Mickey\'s pet',
            type: 'short story',
            description: 'Mickey Mouse has a pet; a dog. The dog is called Pluto. Pluto has 5 puppies with Minnie\'s dog, Fifi.',
        },
        {
            name: 'Mickey\'s friends',
            type: 'short story',
            description: 'Goofy, Donald Duck, Daisy Duck, Chip Dale, Clarice, Max, Clarabelle Cow, Horace Horsecollar etc.',
        },
        {
            name: 'Mickey\'s spaces',
            type: 'short story',
            description: 'He started off as a rabbit',
        },
        {
            name: 'Mickey\'s  relationship',
            type: 'short story',
            description: 'He\'s married to Minnie',
        },
        {
            name: 'Mickey\'s name',
            type: 'short story',
            description: 'Walt Disney originally called Mickey “Mortimer Mouse”. His wife persuaded him to change it.',
        }
    ],
};
