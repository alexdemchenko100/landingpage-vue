////////////////////////////////////////
// AlphaMiddle
// constants
////////////////////////////////////////

const yearsExperienceChoices = [
  { label: 'Junior (0-3 years)', value: 'junior' },
  { label: 'Mid (4-7 years)', value: 'mid' },
  { label: 'Senior (8+ years)', value: 'senior' },
];

const volunteerTimeChoices = [
  { label: 'Quick and Impactful (1 day)', value: 'short' },
  { label: 'Medium-term Engagements (0-6 months)', value: 'mid' },
  { label: 'Long term Commitments (6+ months)', value: 'long' },
];

const volunteerTypeChoices = [
  { label: 'With other members of the AV Network', value: 'team' },
  { label: 'Solo', value: 'solo' },
];

// Causes
const causeChoices = [
  { label: 'Microfinance', value: 'microfinance'},
  { label: 'Water and Sanitation', value: 'water_sanitation'},
  { label: 'Violence against Women', value: 'violence_against_women'},
  { label: 'Aging', value: 'aging'},
  { label: 'Arts & Culture', value: 'arts|culture'},
  { label: 'Cancer', value: 'cancer'},
  { label: 'Climate Change', value: 'climate_change'},
  { label: 'Faith/Spirituality', value: 'faith|spiritualtiy'},
  { label: 'People with Disabilities', value: 'disabilities'},
  { label: 'Workforce Development', value: 'workforce_dev'},
  { label: 'LGBT Equity and Support', value: 'lgbt'},
  { label: 'Criminal Justice', value: 'criminal_justice'},
  { label: 'At-Risk Youth', value: 'at-risk_youth'},
  { label: 'Education', value: 'education'},
  { label: 'Animal Welfare Rights and Protection', value: 'animal_rights'},
  { label: 'Immigration', value: 'immigration'},
  { label: 'Refugees', value: 'refugees'},
  { label: 'Other', value: 'other'},
];

// Hobbies
const hobbyChoices = [
  { label: 'Health and wellness', value: 'health_wellness'},
  { label: 'Travel', value: 'travel'},
  { label: 'Photography', value: 'photography'},
  { label: 'Sports', value: 'sports'},
  { label: 'Arts', value: 'arts'},
  { label: 'Cooking', value: 'cooking'},
];

// Organizations
const orgChoices = [
  { label: 'American Cancer Society', value: 'american_cancer_society'},
  { label: 'Leukemia and Lymphoma Society', value: 'leukemia_lyphomasociety'},
  { label: 'World Vision', value: 'world_vision'},
  { label: 'Animal Rescue Shelter', value: 'animal_rescue_shelter'},
];

// Skills
const skillChoices = [
  { label: 'Databases - SQL', value: 'dbs_sql'},
  { label: 'Databases - NoSQL', value: 'dbs_nosql'},
  { label: 'Databases - Graph Databases', value: 'dbs_graphs'},
  { label: 'Design', value: 'design'},
  { label: 'DevOps', value: 'devops'},
  { label: 'Entrepreneurship', value: 'entrepreneur'},
  { label: 'Funding Options', value: 'funding'},
  { label: 'Management/Leadership', value: 'management'},
  { label: 'Product Management', value: 'product_management'},
  { label: 'Programming - Ruby', value: 'program_ruby'},
  { label: 'Programming - Java', value: 'program_java'},
  { label: 'Programming - Python', value: 'program_python'},
  { label: 'Programming - Javascript', value: 'program_js'},
  { label: 'Programming - Scala', value: 'program_scala'},
  { label: 'Programming - C / C++', value: 'program_c'},
  { label: 'Programming - iOS', value: 'program_ios'},
  { label: 'Programming - Android', value: 'program_android'},
  { label: 'Programming - Other', value: 'program_other'},
  { label: 'Software - General', value: 'software_general'},
  { label: 'Software - Scaling / Performance', value: 'software_scaling'},
  { label: 'Software - Data Science', value: 'software_datascience'},
  { label: 'Software - Security', value: 'software_security'},
  { label: 'Software - Back-end engineering', value: 'software_backend'},
  { label: 'Software - Front-end engineering', value: 'software_frontend'},
  { label: 'Software - Machine Learning', value: 'software_machine_learning'},
  { label: 'Software - Language Processing', value: 'software_language_process'},
  { label: 'Software - Distributed Systems', value: 'software_dist_systems'},
  { label: 'Starting a Business', value: 'starting_business'},
  { label: 'System Networking', value: 'system_networking'},
  { label: 'Technology', value: 'technology'},
  { label: 'Other', value: 'other'},
];

const infoBox = {
  general: `<b>What makes you--You?</b>
 We think people are more than their LinkedIn profiles.
 Our goal is to create a larger picture of your hopes, ambitions and passions
 so that we can more effectively connect you with other network members, content and events
 that help you fulfill your goals. But don't worry. Your profile information will not be public
 and won't be viewable by other members of the AV network
 (<a _target="_blank" href="/privacy-policy">See our Privacy Policy</a>).
 Instead, this profile information will help us internally to identify ways to connect you
 with relevant people, opportunities, events, and content tailored to you.
 The more you share the more effective we can be in making those connections.
`,
  nittyGritty: `
<ul>
    <li><b>Our portfolio companies:</b> We are passionately committed
 to the success of our founders. An important ingredient might be you!
 We want to help our portfolio companies build more diverse teams and
 boards and set the tone early regarding diversity as a key input for
 increasing the odds of success.</li>
 <li><b>Your opportunity:</b> Please share a little more about your work
 experience, especially as it relates to growing and building a technology
 company. We would love to count you in as a resource to help our founders
 succeed!</li>
</ul>`,
    // TODO: add back once linked in connection is implemented
    // <li><b>Remember you can link your account to LinkedIn to auto-populate
    // this section. Click here to connect your account to LinkedIn</b></li>
  questions: `
<ul>
<li><b>We care. We know you do too.</b> At Authentic Ventures,
 we are passionate about helping portfolio companies grow and succeed.
 Our companies will succeed based on their ability to create real, measurable impact
 for their customers. We define our own success not only by how effectively we
 generate financial returns for our investors but also by the real, measurable impact
 our network has on the community and the world. Authentic Ventures is committed to donating
 10 percent of the general partner's profits to causes we all care about. We want to know which
 organizations you would like to see us support.
</li>
<li><b>Causes that provoke your passion:</b> What causes are you most
 passionate about? Which ones do you want to spend your time and resources on?
</li>
</ul>`,
  freestyle: `
<ul>
    <li><b>Meaningful Connections.</b> Social media has enabled people to more
 effectively connect with each other. But how many of these connections are
 truly meaningful?  We believe people are more likely to help and support each
 other when they are connected around values. Values have meaning and they
 are part of what defines the nuances of who we are. Sometimes our values are manifested
 in the work we do and other times they are expressed through volunteering and how
 we spend our free time.</li>
</ul>`,
  aspirations: `
    <b>Aspirations:</b> To help us make meaningful connections for you, help us understand how you would like to interact
    with the larger community through mentorship, sharing your expertise, networking and volunteering. The guiding ethos
    of our community is giving back. That starts with knowing enough about you so that we can be an effective resource for
    you and others in our community.
  `,
  nextInvestment: `
    <ul>
    <li><b>We need you:</b> We are passionately committed to the success of our founders. An important ingredient might be you! We
would love to count you in as a resource to help our founders succeed. Talented folks like yourself will play an important
role in helping Authentic Ventures portfolio companies succeed. We are always on the look out for talented founders
solving hard problems.</li>
    <li><b>Leveraging networks:</b>One of our top priorities as a business is to leverage our network to source great ideas from great
people in our network who are starting companies. We want to help our portfolio companies build more diverse teams and
boards and set the tone early regarding diversity as a key input for increasing the odds of their success.</li>
    </ul>
  `,
};

module.exports = {
  causeChoices,
  hobbyChoices,
  infoBox,
  orgChoices,
  skillChoices,
  volunteerTimeChoices,
  volunteerTypeChoices,
  yearsExperienceChoices,
};
