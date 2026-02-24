import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAnalysisById, getLatestAnalysis } from '../lib/storage';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Calendar, HelpCircle } from 'lucide-react';

function CircularScore({ value }) {
  const size = 120;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = value / 100;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#4F46E5"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-xs text-gray-500">Readiness</span>
      </div>
    </div>
  );
}

export function Results() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState(null);

  useEffect(() => {
    const entry = id ? getAnalysisById(id) : getLatestAnalysis();
    setData(entry);
  }, [id]);

  if (!data) {
    return (
      <div className="space-y-6">
        <Link
          to="/dashboard/assessments"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Assessments
        </Link>
        <Card>
          <CardContent className="py-12 text-center text-gray-500">
            No analysis found. Analyze a job description first.
          </CardContent>
        </Card>
      </div>
    );
  }

  const { company, role, extractedSkills, checklist, plan, questions, readinessScore } = data;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          to="/dashboard/assessments"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Assessments
        </Link>
        <Link
          to="/dashboard/history"
          className="text-sm text-gray-600 hover:text-primary"
        >
          View History
        </Link>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {company && <span className="text-gray-600">{company}</span>}
        {role && <span className="text-gray-600">• {role}</span>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Readiness Score */}
        <Card>
          <CardHeader>
            <CardTitle>Readiness Score</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <CircularScore value={readinessScore} />
          </CardContent>
        </Card>

        {/* Key Skills Extracted */}
        <Card>
          <CardHeader>
            <CardTitle>Key Skills Extracted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {Object.entries(extractedSkills.byCategory || {}).map(([key, { label, skills }]) => (
                <div key={key}>
                  <span className="text-xs font-medium text-gray-500 uppercase">{label}</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-primary-light text-primary rounded-md text-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Round-wise Checklist */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Round-wise Preparation Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {checklist?.map((round) => (
                <div key={round.round}>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {round.round}: {round.title}
                  </h4>
                  <ul className="space-y-1">
                    {round.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 7-day Plan */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              7-Day Preparation Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {plan?.map((day) => (
                <div
                  key={day.day}
                  className="p-4 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Day {day.day}</h4>
                  <p className="text-sm text-gray-600 mb-2">{day.title}</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {day.items?.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 10 Likely Questions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              10 Likely Interview Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              {questions?.map((q, i) => (
                <li key={i} className="flex gap-2 text-gray-700">
                  <span className="font-medium text-primary shrink-0">{i + 1}.</span>
                  {q}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
