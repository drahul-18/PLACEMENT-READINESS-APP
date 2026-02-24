/**
 * localStorage persistence for analysis history
 */

const STORAGE_KEY = 'placement_readiness_history';

export function saveAnalysis(entry) {
  const history = getHistory();
  const newEntry = {
    ...entry,
    id: entry.id || `analysis_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    createdAt: entry.createdAt || new Date().toISOString(),
  };
  history.unshift(newEntry);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return newEntry.id;
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
    return null;
  }
}

export function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to read from localStorage:', e);
    return [];
  }
}

export function getAnalysisById(id) {
  const history = getHistory();
  return history.find((e) => e.id === id) || null;
}

export function getLatestAnalysis() {
  const history = getHistory();
  return history[0] || null;
}
