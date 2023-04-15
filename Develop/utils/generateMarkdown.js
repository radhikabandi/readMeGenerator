// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

//  function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}


// additional function to return a message if user doesn't want contributors
function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  Thank you for your interest ; however, I will not be accepting contributions from others on this project.
    `;
  } else {
    return `
  ${data}
    `;
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  console.log('cmin ginsede',data)
  return `# ${data.title}

  
 ${renderLicenseBadge(data.license)}
 
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

 ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}

  ## [Installation](#table-of-contents)
  ${data.installation}
  
  ## [Usage](#table-of-contents)
  ${data.usage}
  

  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)

  ${renderContributingSection(data.confirmContributers, data.contribute)}

  
    ## [Tests](#table-of-contents)
  ${data.test}
  
  
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;

}

module.exports = generateMarkdown;
