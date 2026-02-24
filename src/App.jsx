/**
 * KodNest Premium Build System — Design System Demo
 * Layout shell showcasing all structural components.
 * No product features — design system only.
 */

import {
  TopBar,
  ContextHeader,
  PrimaryWorkspace,
  SecondaryPanel,
  ProofFooter,
  EmptyState,
  ErrorState,
} from './components';

function App() {
  return (
    <div className="app-shell">
      <TopBar
        projectName="KodNest Premium Build System"
        step={1}
        totalSteps={4}
        status="In Progress"
      />

      <ContextHeader
        headline="Design System Overview"
        subtext="A calm, intentional foundation for B2C product experiences."
      />

      <div className="main-content">
        <PrimaryWorkspace>
          <div className="card" style={{ marginBottom: 'var(--space-3)' }}>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Primary Workspace</h3>
            <p style={{ marginBottom: 'var(--space-2)' }}>
              This is where the main product interaction happens. Clean cards, predictable components, no crowding.
            </p>
            <EmptyState
              message="No content yet. Add your primary workflow here."
              actionLabel="Get Started"
              onAction={() => {}}
            />
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn">Default Button</button>
          </div>

          <div style={{ marginTop: 'var(--space-3)' }}>
            <input
              className="input"
              type="text"
              placeholder="Clean input with clear focus state"
              style={{ maxWidth: '400px' }}
            />
          </div>

          <div style={{ marginTop: 'var(--space-4)' }}>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>Error State</h3>
            <ErrorState
              message="Something went wrong while saving. Your changes were not lost."
              hint="Try again in a moment. If the issue persists, refresh the page."
            />
          </div>
        </PrimaryWorkspace>

        <SecondaryPanel
          stepExplanation="Review the design tokens and component patterns. Each element follows the spacing scale and color system."
          promptText="Copy this prompt to build something in Lovable."
          onBuildInLovable={() => {}}
          onItWorked={() => {}}
          onError={() => {}}
          onAddScreenshot={() => {}}
        />
      </div>

      <ProofFooter />
    </div>
  );
}

export default App;
