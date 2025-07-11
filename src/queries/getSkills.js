// src/queries/getSkills.js

export async function getSkills() {
  return [
    // Frontend
    { 
      name: 'React', 
      description: 'Building dynamic, component-based UIs with hooks and context.', 
      category: 'Frontend' 
    },
    { 
      name: 'HTML/CSS', 
      description: 'Semantic markup and modern layout (Flexbox, Grid).', 
      category: 'Frontend' 
    },
    { 
      name: 'JavaScript', 
      description: 'ES6+ syntax, DOM manipulation, and async programming.', 
      category: 'Frontend' 
    },

    // Backend
    { 
      name: 'Node.js', 
      description: 'RESTful APIs and server-side logic with Express.', 
      category: 'Backend' 
    },
    { 
      name: 'Java', 
      description: 'Building scalable services and libraries.', 
      category: 'Backend' 
    },
    { 
      name: 'C#', 
      description: 'ASP.NET Core web APIs and background services.', 
      category: 'Backend' 
    },
    { 
      name: 'Python', 
      description: 'Scripting, data pipelines, and microservices.', 
      category: 'Backend' 
    },

    // Cloud & DevOps
    { 
      name: 'Azure', 
      description: 'App Services, Functions, DevOps pipelines, and Key Vault.', 
      category: 'Cloud & DevOps' 
    },
    { 
      name: 'CI/CD', 
      description: 'Designing and maintaining automated build & deploy pipelines.', 
      category: 'Cloud & DevOps' 
    },

    // Databases
    { 
      name: 'MySQL', 
      description: 'Schema design, queries, and performance tuning.', 
      category: 'Databases' 
    },
    { 
      name: 'Azure SQL', 
      description: 'Managed SQL instances, elastic pools, and backups.', 
      category: 'Databases' 
    },

    // Tools & Practices
    { 
      name: 'Agile', 
      description: 'Iterative development with frequent demos and retrospectives.', 
      category: 'Tools & Practices' 
    },
    { 
      name: 'Scrum', 
      description: 'Participating in sprint planning, standups, and reviews.', 
      category: 'Tools & Practices' 
    }
  ];
}
