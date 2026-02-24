# Verification Steps — JD Analysis

## 1. Skill Extraction

Skill extraction uses case-insensitive keyword matching. Categories:

- **Core CS**: DSA, OOP, DBMS, OS, Networks
- **Languages**: Java, Python, JavaScript, TypeScript, C, C++, etc.
- **Web**: React, Next.js, Node.js, Express, REST, GraphQL
- **Data**: SQL, MongoDB, PostgreSQL, MySQL, Redis
- **Cloud/DevOps**: AWS, Azure, GCP, Docker, Kubernetes, CI/CD, Linux
- **Testing**: Selenium, Cypress, Playwright, JUnit, PyTest

If no keywords match → shows "General fresher stack".

## 2. Sample JD for Testing

Copy this into the Assessments form:

```
Google — Software Engineer Intern

Requirements:
- Strong foundation in DSA and algorithms
- Proficiency in Java or Python
- Experience with React and JavaScript
- Knowledge of SQL and database design
- Familiarity with AWS or GCP
- Understanding of REST APIs and GraphQL
- Experience with Docker and CI/CD pipelines
```

Expected: Core CS, Languages (Java, Python), Web (React, JavaScript, REST, GraphQL), Data (SQL), Cloud/DevOps (AWS, GCP, Docker, CI/CD).

## 3. History Persistence

1. Run `npm run dev`
2. Go to **Dashboard** → **Assessments**
3. Paste the sample JD above
4. Enter Company: Google, Role: SDE Intern
5. Click **Analyze**
6. You should see **Results** with score, skills, checklist, 7-day plan, questions
7. Go to **History** in the sidebar
8. You should see the entry with date, company, role, score
9. Refresh the page (F5) — History still shows the entry
10. Click the entry → opens Results with that analysis

## 4. Readiness Score

- Base: 35
- +5 per detected category (max 30)
- +10 if company provided
- +10 if role provided
- +10 if JD length > 800 chars
- Cap: 100

## 5. Routes (Unchanged)

- `/` — Landing
- `/dashboard` — Dashboard
- `/dashboard/practice` — Practice
- `/dashboard/assessments` — JD Analysis

New routes:
- `/dashboard/results` — Analysis results (?id= for history)
- `/dashboard/history` — Past analyses
