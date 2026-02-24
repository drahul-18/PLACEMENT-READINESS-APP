import { Link } from 'react-router-dom';
import { getHistory } from '../lib/storage';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { History as HistoryIcon } from 'lucide-react';

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return '—';
  }
}

export function History() {
  const entries = getHistory();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analysis History</h2>
      <p className="text-gray-600">
        Your past JD analyses. Click an entry to view full results.
      </p>

      {entries.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-gray-500">
            No analyses yet. Analyze a job description from the Assessments page.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <Link
              key={entry.id}
              to={`/dashboard/results?id=${entry.id}`}
              className="block"
            >
              <Card className="hover:border-primary transition-colors cursor-pointer">
                <CardContent className="py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
                      <HistoryIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {entry.company || 'No company'} • {entry.role || 'No role'}
                      </p>
                      <p className="text-sm text-gray-500">{formatDate(entry.createdAt)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-primary-light text-primary rounded-lg font-medium">
                      {entry.readinessScore}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
