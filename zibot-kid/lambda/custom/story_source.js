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
  dataByCharacterName: function dataByCharacterName(input){
    const list = [];
    for (let i = 0; i < data.storys.length; i += 1) {
        if (data.storys[i].about.search(input) > -1) {
            list.push(data.storys[i]);
        }
    }
    return list;
  },
  dataByStoryName: function dataByStoryName(input){
        var list;
        for (let i = 0; i < data.storys.length; i += 1) {
            if (data.storys[i].name.search(input) > -1) {
                list=data.storys[i];
            }
    }
        return list;
    }
}

const data={
    company: 'Disney',
    storys: [
        {
            name: 'Mickey\'s toy story',
            about: 'Mickey Mouse',
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
            name: 'Mickey\'s pet',
            about: 'Mickey Mouse',
            type: 'short story',
            description: 'Mickey Mouse has a pet; a dog. The dog is called Pluto. Pluto has 5 puppies with Minnie\'s dog, Fifi.',
            quiz:'What is Mickey mouse pet?',
            answer: 'dog'
        },
        {
            name: 'Mickey\'s friends',
            about: 'Mickey Mouse',
            type: 'short story',
            description: 'Goofy, Donald Duck, Daisy Duck, Chip Dale, Clarice, Max, Clarabelle Cow, Horace Horsecollar etc.',
            quiz: 'who is mickey Best friend?',
            answer: 'Donald duck'
        },
        {
            name: 'Mickey\'s spaces',
            about: 'Mickey Mouse',
            type: 'short story',
            description: 'He started off as a rabbit',
            quiz: 'What is mickey mouse space? Its not mouse!',
            answer: 'Rabbit'
        },
        {
            name: 'Mickey\'s  relationship',
            about: 'Mickey Mouse',
            type: 'short story',
            description: 'He\'s married to Minnie',
            quiz: 'who is mickey mouse girl friend?',
            answer: 'Minne'
        },
        {
            name: 'Donald duck fame',
            about: 'Donald Duck',
            type: 'short story',
            description: 'HE’S BEEN A STAR FOR OVER 80 YEARS.',
        },
        {
            name: 'Donald Duck Birthday',
            about: 'Donald Duck',
            type: 'short story',
            description: 'HIS BIRTHDAY IS MARCH 13, 1914.',
        },
        {
            name: 'Donald duck twin sister',
            about: 'Donald Duck',
            type: 'short story',
            description: 'HIS TWIN SISTER WAS AN ASTRONAUT',
        },
        {
            name: 'Donald duck colorblind',
            about: 'Donald Duck',
            type: 'short story',
            description: 'DONALD IS COLORBLIND, Donald is actually believed to be at least partially colorblind. In the wartime short Donald Gets Drafted, Donald goes to his local draft board and joins the army, getting accepted despite identifying a green card with “green” written on it as blue, having flat feet, and having no brain ',
        },
        {
            name: 'Donald duck spaces',
            about: 'Donald Duck',
            type: 'short story',
            description: 'He’s a real duck! Did you know that Donald Duck was modeled after a real duck species? He’s an American Pekin, to be exact. This breed of duck actually has its origins in China but became a popular commercial duck choice for U.S. breeders after being brought over in the late 1800s. Pekin ducks are recognizable by their large bodies (larger than most other duck breeds) and their white (or sometimes creamy colored) plumage.',
        },
        {
            name: 'Pooh Nickname',
            about: 'Pooh',
            type: 'short story',
            description: 'Pooh has nick name like Pooh Bear, Edward Bear, Silly Old Bear',
        },
        {
            name: 'Pooh spaces',
            about: 'Pooh',
            type: 'short story',
            description: 'Pooh is teddy bear',
        },
        {
            name: 'Pooh gender',
            about: 'Pooh',
            type: 'short story',
            description: 'As you know pooh is male',
        },
        {
            name: 'Pooh Goes Visiting',
            about: 'Pooh',
            type: 'long story',
            description: 'Pooh always liked a little something at eleven o\'clock in the morning, and he was very glad to see Rabbit getting out the plates and mugs. Having a mouthful of something at Rabbit\'s is very nice indeed, but squeezing back out of the front door again is quite another matter. When Pooh finds himself a Wedged Bear, there\'s nothing to do but wait until he gets thin again. Oh Bother!',
        },
        {
            name: 'Winnie the Pooh friends',
            about: 'Pooh',
            type: 'long story',
            description: 'Christopher Robin, Piglet, Eeyore, Tigger',
        },
    ],
};
