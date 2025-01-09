<script>
const data = {
  name: "Jane Doe",
  contactInfo: [
    { label: "✉️ janedoe@gmail.com", link: "mailto:janedoe@gmail.com" },
    { label: "🔗 linkedin.com/in/janedoe", link: "https://linkedin.com/in/janedoe" }
  ],
  summary: "Management undergraduate student that living under principle of the all hard work definitely paid off. Quickly adapt to the new environment, life-learner person, an open minded individual who loves to collaborate and share new things. Passionate in business analysis, financial management and human resources.",
  education: [
    {
      institution: "University of Airlangga",
      degree: "Undergraduate, Accounting and Finance",
      date: "2020 - 2021",
      details: "Selected as one of the 4 motivated-undergraduate students from Faculty of Economics and Business, Hasanuddin University to take part in student exchange at Airlangga University for 1 semester with subject Capital Market | GPA 4.00"
    },
    {
      institution: "University of Brawijaya",
      degree: "Undergraduate, Entrepreneurship",
      date: "2020 - 2021",
      details: "Selected as one of the 4 motivated-undergraduate students from Faculty of Economics and Business, Hasanuddin University to take part in student exchange at Brawijaya University for 1 semester with subject Family Business | GPA 4.00"
    },
    {
      institution: "University of Hasanuddin",
      degree: "Undergraduate, Management",
      date: "2018 - 2021",
      details: "The 2021 Most Outstanding Student III, Faculty of Economics and Business | GPA 3.89"
    }
  ],
  workExperience: [
    {
      position: "Project Lead",
      company: "Otoritas Jasa Keuangan",
      date: "Nov 2021 - Dec 2021 (2 months)",
      details: [
        "Leading project from Otoritas Jasa Keuangan (OJK) collaborated with Bank Indonesia, BRI Dana Reksa, and GenBI Wilayah Sulawesi Selatan called \"GenBIKu (GenBI Series Bulan Inklusi Keuangan)\"",
        "Supervised and directing 18 committees from 3 universities: UNHAS, UNM, UINAM",
        "Successfully held a webinar with total of 150+ participants and 95% rate of participants satisfaction for the speakers and material provided"
      ]
    },
    {
      position: "QRIS Nasional Volunteer",
      company: "Central Bank of Indonesia",
      date: "Sep 2021 - Dec 2021 (4 months)",
      details: []
    }
  ]
};

function printCV() {
  window.print();
}
</script>

<svelte:head>
  <title>CV - {data.name}</title>
  <style>
    @media print {
      /* Hide everything except CV content */
      body > *:not(.cv-content) {
        display: none !important;
      }
      
      /* Reset margins and padding for print */
      @page {
        margin: 2cm;
      }

      /* Hide the print button when printing */
      .print-button {
        display: none !important;
      }

      /* Ensure page breaks don't occur in the middle of sections */
      .section {
        break-inside: avoid;
      }

      /* Print specific styles */
      .cv-content {
        padding: 0 !important;
        margin: 0 !important;
      }
    }
  </style>
</svelte:head>

<div class="cv-content max-w-[850px] mx-auto my-10 p-5 leading-relaxed font-sans bg-white">
  <div class="section mb-8">
    <h1 class="text-3xl font-bold mb-4">{data.name}</h1>
    <div class="flex flex-col sm:flex-row gap-3 sm:gap-8 mb-8">
      {#each data.contactInfo as contact}
        <a 
          href={contact.link} 
          target="_blank" 
          class="text-blue-600 no-underline flex items-center gap-1 hover:underline"
        >
          {contact.label}
        </a>
      {/each}
    </div>
  </div>

  <div class="section mb-8">
    <h2 class="text-2xl font-bold mb-5 pb-1 border-b-2 border-black">Summary</h2>
    <p>{data.summary}</p>
  </div>

  <div class="section mb-8">
    <h2 class="text-2xl font-bold mb-5 pb-1 border-b-2 border-black">Education</h2>
    {#each data.education as edu}
      <div class="mb-6">
        <div class="text-lg font-bold mb-1">{edu.institution}</div>
        <div class="text-base mb-1">{edu.degree}</div>
        <div class="text-gray-700 mb-1">{edu.date}</div>
        <div>{edu.details}</div>
      </div>
    {/each}
  </div>

  <div class="section mb-8">
    <h2 class="text-2xl font-bold mb-5 pb-1 border-b-2 border-black">Work Experience</h2>
    {#each data.workExperience as exp}
      <div class="mb-6">
        <div class="font-bold mb-1">{exp.position}</div>
        <div class="text-lg font-bold">{exp.company}</div>
        <div class="text-gray-700 mb-1">{exp.date}</div>
        {#if exp.details.length > 0}
          <ul class="ml-5 mt-2">
            {#each exp.details as detail}
              <li class="mb-1">{detail}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>

  <button 
    on:click={printCV}
    class="print-button px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
  >
    Print CV
  </button>
</div>