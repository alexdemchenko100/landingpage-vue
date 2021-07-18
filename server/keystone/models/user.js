const _ = require('lodash');
const keystone = require('keystone');

const Types = keystone.Field.Types;

const User = new keystone.List('user');

const personalStoryLabel = `
We invite you to create a 1-2 min video sharing your own personal story. What drives you?
What problem are you committed to solving? What issues keep you up at night?
Feel free to see sample videos below for ideas. This video will help us to connect you with the right
people, opportunities and events.
`;

const introductionsLabel = `
Please share with us the name, contact information and general overview of
people you think we should know. At the moment, we are particularly interested in fellow
founders/company builders and individuals with strong backgrounds
in engineering, product management, design and dev ops
but other people with exceptional backgrounds are also of keen interest!
`;

const passionsOptions = [
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
];

const hobbiesOptions = [
  { label: 'Health and wellness', value: 'health_wellness'},
  { label: 'Travel', value: 'travel'},
  { label: 'Photography', value: 'photography'},
  { label: 'Sports', value: 'sports'},
  { label: 'Arts', value: 'arts'},
  { label: 'Cooking', value: 'cooking'},
];

const supportOrgsOptions = [
  { label: 'American Cancer Society', value: 'american_cancer_society'},
  { label: 'Leukemia and Lymphoma Society', value: 'leukemia_lyphomasociety'},
  { label: 'World Vision', value: 'world_vision'},
  { label: 'Animal Rescue Shelter', value: 'animal_rescue_shelter'},
];

const skillsOptions = [
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
];

const volunteerOppsOptions = [
  { label: 'Quick and Impactful (1 day)', value: 'short' },
  { label: 'Medium-term Engagements (0-6 months)', value: 'mid' },
  { label: 'Long term Commitments (6+ months)', value: 'long' },
];

const volunteerTypeOptions = [
  { label: 'With other members of the AV Network', value: 'team' },
  { label: 'Solo', value: 'solo' },
];

const yearsExperienceOptions = [
  { label: 'Junior (0-3 years)', value: 'junior' },
  { label: 'Mid (4-7 years)', value: 'mid' },
  { label: 'Senior (8+ years)', value: 'senior' },
];

User.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
  phone: { type: Types.Text, initial: true },
  canAccessKeystone: { type: Boolean, initial: true },
  questions: {
    currentStep: { type: Types.Number, default: 1 },
    highSchoolLocation: { type: Types.Text, label: 'I attended high school in' },
    highSchoolName: { type: Types.Text, label: 'I went to' },
    raised: { type: Types.Text, label: 'I was raised in' },
    undergradSchoolName: { type: Types.Text, label: 'I attended undergrad at' },
    undergradSchoolMajor: { type: Types.Text, label: 'I majored in' },
    undergradSchoolYear: { type: Types.Number, label: 'I graduated in' },
    gradSchoolName: { type: Types.Text, label: 'I attended graduate school at' },
    gradSchoolYear: { type: Types.Number, label: 'I graduated from graduate school in' },
    yearsExperience: {
      type: Types.Select,
      label: 'How many years of experience do you have in your current field?',
      options: yearsExperienceOptions,
    },
    work: { type: Types.Text, label: 'I currently work at' },
    title: { type: Types.Text, label: 'At my current job I\'m a(n)' },
    role: { type: Types.Textarea, label: 'What does your typical day look like? What duties are you responsible for in your current role?' },
    accomplishments: { type: Types.Textarea, label: 'What professional accomplishments are you most proud of?' },
    idealRole: { type: Types.Textarea, label: 'If you could change your professional role or responsibilities, what would you change?' },
    professionalGoals: { type: Types.Textarea, label: 'Are there specific professional goals that we can help you achieve? If so, what are they?' },
    superpower: { type: Types.Textarea, label: 'Share with us more about your \"superpower\" -- the thing(s) you do like no other. What is a superpower you would like to share with the community?' },
    beMentored: { type: Boolean, label: 'I\'m interested in being mentored' },
    interests: {
      type: Types.Select,
      label: 'My areas of interest include (choose up to 3)',
      options: skillsOptions, // interests are same
    },
    interestsOther: { type: Types.Text, label: 'Write-In option for Interests' },
    beMentor: { type: Boolean, label: 'Sign me up to mentor someone else! (Don\'t worry, we will contact you directly before assigning anyone to you' },
    skills: {
      type: Types.Select,
      label: 'My expertise includes (choose up to 3)',
      options: skillsOptions,
      many: true
    },
    skillsOther: { type: Types.Text, label: 'Write-In option for Skills' },
    joinBoard: { type: Types.Textarea, label: 'Are you interested in joining a board of directors or advisory board? Non-profit or for profit? What would an ideal fit for you be?' },
    communityHelp: { type: Types.Textarea, label: 'How can we be most helpful to you? Are there specific types of content, events or people you would like to be connected with?' },
    volunteerOpps: {
      type: Types.Select,
      label: 'I prefer volunteer opportunities that are',
      options: volunteerOppsOptions,
    },
    volunteerType: {
      type: Types.Select,
      label: 'I prefer to volunteer',
      options: volunteerTypeOptions,
    },
    volunteerSuccess: {
      type: Types.Textarea,
      label: 'Ideally, what does success look like from your participation in the Authentic Venture Network? (In your own words)',
    },
    passions: {
      type: Types.Select,
      label: 'I am most passionate about... (choose up to 5)',
      options: passionsOptions,
    },
    passionsOther: { type: Types.Text, label: 'Write-In option for passions' },
    supportOrgs: {
      type: Types.Select,
      label: 'Organizations I want to support (choose up to 3)',
      options: supportOrgsOptions,
    },
    orgsOther: { type: Types.Text, label: 'Write-In option for support organizations' },
    hobbies: {
      type: Types.Select,
      label: 'I enjoy spending my time... (choose up to 3)',
      options: hobbiesOptions,
    },
    personalStory: {
      type: Types.Text,
      label: personalStoryLabel,
    },
    introductions: { type: Types.Textarea, label: introductionsLabel },
  },
});

User.register();
