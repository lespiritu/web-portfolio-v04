interface tabDataShade {
  id: string;
  name: string;
  title?: string;
  subTitle?: string;
  content?: string;
  listContent?: string[];
}

export const tabData: tabDataShade[] = [
  {
    id: '1',
    name: 'Freelancer',
    title: 'Graphic Designer, Virtual Assistance, Photo Editor',
    subTitle: 'February 1, 2017 - Present',
    content: `It's been a long years I have working as online freelancer in Upwork platform. I have work for some different task like Photo Editing, do some graphic design, banner, logo and even editing basic html and css for the best listing job. It is nice to work at home specialy I can hundle more time to work and to my self. Bellow is some tools I have used as a freelancer.`,
    listContent: [
      'Adobe Photoshop for Photo Editing and some Design',
      'Adobe Illustrator for vector design like logo and banner',
      'Adobe Lightroom for Photo Editing',
      'Basic coding using HTML and CSS using Visual Studio Code',
      'Some administrative task in shopify',
    ],
  },

  {
    id: '2',
    name: 'Personiv',
    title: 'Photo Editor',
    subTitle: 'April 17, 2017 - November 20, 2017',
    content:
      '6F Aeon Center Building North Bridgeway Avenue Corner Alabang-Zapote Road Filinvest Corporate City, Alabang',
    listContent: [
      'I have work as a Photo Editor for seven months in Personiv. I have learn a lot specialy using Mac',
      'We use Mac desktop for editing images.',
      'Our client is Revolve a known E-commerse and passion design in other company.',
    ],
  },
  {
    id: '3',
    name: 'TaskUs',
    title: 'Photo Editor, Quality Analyst',
    subTitle: 'October 17, 2014 - March 17, 2017',
    listContent: [
      'I have been work over two year in TaskUs Cavite. On my first six months I work as a Photo Editor.',
      'After six months I apply to work as a Quality Asurance for the same team. As a QA, we check and make sure the images are well edited and follow the basic editing standards from our client.',
      'Also we download and upload images and sent to the client.',
      'We also do coaching for our Photo Editor for them to improve thier editing skills and tell them what was thier mistake in the previous task.',
      'building Address: 4F, Lumina Point, Bayan Luma II, Imus Cavite, Philippines',
      'T. De Castro Bldg. II, E. Aguinaldo Highway, Palico, Imus, 4103 Cavite',
    ],
  },

  {
    id: '4',
    name: 'Warehouse',
    title: 'Oracle Encoder, Outbound transaction',
    subTitle: 'May 30, 2013 – December  31, 2013',
    content: 'Under San Roque Manpower Agency - Santa Rosa City ',

    listContent: [
      '121 East Science Avenue, Laguna Technopark, Biñan, Laguna 4024',
      'MD Distripark Manila, Inc. /Serving for Sunpower corp.',
      'My duty is to transac all resquested materials from Sunpower corp.',
      'I input some details from the materils like supplier, quality, expiration date and more',
    ],
  },
  {
    id: '5',
    name: 'Printing',
    title: 'Graphic Artis',
    subTitle: 'September 2012- February 2013',
    content:
      'This is my first job after my OJT, I used to work and also do some self sduty for me to learn more about designing. This is the steping stone for me to get my job in TaskUs. I also do printing using tarpuline printer machine and also do assistance for customers.',
  },

  {
    id: '6',
    name: 'Lexmark',
    title: 'Software Engineering Student',
    subTitle: 'April 01, 2011- March 30, 2012',
    content:
      'In Lexmark Plaza 1, Samar Loop corner Panay Road, Cebu Business Park, Cebu City I work as an Software Engineering Student. We have 75% of salary.',
    listContent: [
      'Our school is a partner with Leaxmark. Me and my other shoolmates are choose to work as an OJT with the company',
      'Our team is from Localization department.',
      'We responsible for the translation in the GUI of firmware of a printer. ',
      'We going to apply the translation to the firsmware base on the English translation.',
      'We also do fixed some bugs.',
    ],
  },
];
