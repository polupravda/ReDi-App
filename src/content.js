export const mentors = [
  {
    name: "Joe",
    surname: "Doe",
    position: "Front-end developer",
    pictureUrl: "https://randomuser.me/api/portraits/men/29.jpg",
    availability: true,
    intro:
      "Hi I am here to be one of the mentors. If the styled target is a simple element (e.g. styled.div), styled-components passes through any known HTML attribute to the DOM. If it is a custom React component (e.g. styled(MyComponent)), styled-components passes through all props.",
    skills: ["React", "HTML", "CSS", "JS"],
    contactDetails: {
      phone: "01765556667",
      email: "joe.doe@gmail.com"
    }
  },
  {
    name: "Emma",
    surname: "Swift",
    position: "Back-end developer",
    pictureUrl: "https://randomuser.me/api/portraits/women/47.jpg",
    availability: false,
    intro:
      "Hi I am Emma. Scroll and resize events are tricky because they can be fired more than a dozen times in less than a second, that’s why the component comes with throttle by default.",
    skills: ["Python", "Flask", "Django", "JS"],
    contactDetails: {
      phone: "017655009090",
      email: "emma.swift@gmail.com"
    }
  },
  {
    name: "Nicola",
    surname: "Tesla",
    position: "Junior Designer",
    pictureUrl: "https://randomuser.me/api/portraits/men/41.jpg",
    availability: true,
    intro:
      "Hi I am Nicola. This example shows how all props of the Input component are passed on to the DOM node that is mounted, as with React elements.",
    skills: ["Python", "Flask", "Django", "JS"],
    contactDetails: {
      phone: "01767666880",
      email: "nicola.tesla@gmail.com"
    }
  }
];
