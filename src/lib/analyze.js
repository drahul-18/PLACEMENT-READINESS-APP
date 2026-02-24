/**
 * Main analysis orchestrator
 */

import { extractSkills } from './skills';
import { generateChecklist } from './checklist';
import { generatePlan } from './plan';
import { generateQuestions } from './questions';
import { calculateReadinessScore } from './readiness';

export function runAnalysis({ company, role, jdText }) {
  const extractedSkills = extractSkills(jdText);
  const checklist = generateChecklist(extractedSkills);
  const plan = generatePlan(extractedSkills);
  const questions = generateQuestions(extractedSkills);
  const readinessScore = calculateReadinessScore({
    company,
    role,
    jdText,
    extractedSkills,
  });

  return {
    extractedSkills,
    checklist,
    plan,
    questions,
    readinessScore,
  };
}
