// src/utils.js
import he from 'he';

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// This is our universal HTML cleaner. It first decodes any special characters
// (like &lt;) and then removes all the HTML tags.
export function StripHtml(html) {
    if (!html) return "";
    const decodedHtml = he.decode(html);
    return decodedHtml.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

// A common set of keywords we can reuse for multiple sites.
export const COMMON_KEYWORDS =// A new, targeted filterKeywords array based on your resume

[
  // --- Roles & Titles (English) ---
  "software engineer intern",
  "web developer intern",
  "full stack intern",
  "full-stack intern",
  "backend intern",
  "frontend intern",
  "react developer intern",
  "node.js developer intern",
  "javascript developer intern",
  "mern stack developer",
  "trainee software engineer",
  "software developer trainee",
  "apprentice software developer",
  "working student",
  "werkstudent", // The German word for "working student" (you had this, it's perfect)

  // --- German Roles & Titles ---
  "Praktikum", // "Internship" - A very common search term (e.g., "Praktikum Softwareentwicklung")
  "Praktikant", // "Intern" (male or neutral term)
  "Softwareentwickler Praktikant", // "Software Engineer Intern"
  "Webentwickler Praktikant", // "Web Developer Intern"
  "Frontend Entwickler Praktikant",
  "Backend Entwickler Praktikant",
  "Werkstudent Softwareentwicklung", // "Working Student Software Development"
  "Werkstudent IT", // A more general "Working Student IT"
  "Trainee", // Same word, very common for graduate programs
  "Ausbildung", // "Apprenticeship" (a formal multi-year vocational training program)
  "Auszubildender", // "Apprentice" (often shortened to "Azubi")
  "Fachinformatiker Anwendungsentwicklung", // The official apprenticeship title for a software developer

  // --- Core Technologies (These are the same in German) ---
  "react",
  "node.js",
  "express.js",
  "mongodb",
  "javascript",
  "python",
  "SQL", // Also used, sometimes "SQL-Kenntnisse" (SQL skills) is in the description
  "Power BI",
  "Excel",

  // --- General Terms for Fresher Roles (English) ---
  "junior",
  "entry level",
  "graduate",
  "analyst",
  
  // --- German General Terms for Fresher Roles ---
  "Junior", // Used exactly like in English (e.g., "Junior Softwareentwickler")
  "Einsteiger", // "Beginner" / "Entry Level"
  "Berufseinsteiger", // "Career Starter" / "Person starting their career"
  "Absolvent", // "Graduate"
  "Datenanalyst", // "Data Analyst"
  "Data Analyst" // Often kept in English as well
]