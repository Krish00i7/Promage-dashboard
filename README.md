# Promage - Project Management Dashboard

A modern, responsive project management dashboard built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Dashboard Overview**: Real-time metrics for revenue, projects, time spent, and resources
- **Project Management**: Comprehensive project table with filtering, sorting, and status tracking
- **Progress Visualization**: Circular gauge showing overall project completion
- **Task Management**: Today's task list with status filters (All, Important, Notes, Links)
- **Workload Matrix**: Visual representation of project workload over time
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices

## 🎨 UX Design Principles Applied

### 1. **Fitts's Law**
- Large, easily clickable action buttons (Create new project button)
- Adequate spacing between interactive elements
- Primary actions prominently placed in the sidebar

### 2. **Hick's Law**
- Simplified navigation with only 3 main menu items (Dashboard, Projects, Tasks)
- Grouped related information into distinct sections
- Progressive disclosure with dropdown filters

### 3. **Miller's Law (Cognitive Load)**
- Information chunked into digestible cards (4 metric cards)
- Visual hierarchy with clear section headings
- Limited choices per section (max 7±2 items visible at once)

### 4. **Law of Proximity**
- Related metrics grouped together in the overview section
- Task status badges positioned next to task titles
- Project details organized in logical table columns

### 5. **Gestalt Principles**
- **Similarity**: Consistent card styling for metrics
- **Continuity**: Visual flow from top metrics down to detailed data
- **Closure**: Complete circular progress gauge
- **Figure-Ground**: Clear distinction between content cards and background

### 6. **Von Restorff Effect**
- Primary action button (Create new project) stands out with orange color
- Status badges use distinct colors (green, orange, red) for quick recognition
- Active navigation item highlighted

## 🎯 Micro-interactions & Animations

All animations follow purposeful design principles:

- **Hover States**: 200ms transitions on interactive elements (buttons, table rows, cards)
- **Fade-in Animations**: Staggered entry animations (150ms delays) for list items
- **Progress Bars**: 500ms smooth transitions for progress percentage changes
- **Scale Effects**: Subtle hover scale (110%) on workload matrix circles
- **Color Transitions**: 200ms ease-out for status badge hover states

See `PHASE_NOTES.md` for detailed implementation notes.

## 🛠️ Tech Stack

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Router** - Navigation

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn)
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── Header.tsx       # Top header with search and profile
│   ├── MetricCard.tsx   # Overview metric cards
│   ├── ProjectTable.tsx # Project summary table
│   ├── ProgressGauge.tsx # Circular progress visualization
│   ├── TaskList.tsx     # Today's task list
│   └── WorkloadMatrix.tsx # Workload visualization
├── pages/
│   ├── Index.tsx        # Main dashboard layout
│   ├── Dashboard.tsx    # Dashboard content
│   ├── Projects.tsx     # Projects page (placeholder)
│   └── Tasks.tsx        # Tasks page (placeholder)
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#FF6B35) - Brand color, CTAs
- **Success**: Green (#22C55E) - Completed status
- **Warning**: Orange (#F59E0B) - Delayed/On-going status  
- **Destructive**: Red (#EF4444) - At-risk status
- **Metric Colors**: Purple, Orange, Blue, Yellow for different metrics

### Typography
- Font: System font stack (optimized for readability)
- Headings: Bold weights (600-700)
- Body: Regular weight (400)

### Spacing
- Base unit: 4px (0.25rem)
- Card padding: 24px (1.5rem)
- Section gaps: 24px (1.5rem)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2 column grid)
- **Desktop**: > 1024px (4 column grid for metrics)

## 🔒 Data

Currently uses mock data. To integrate with a real API:

1. Replace mock data in components with API calls
2. Use React Query for data fetching and caching
3. Add loading and error states
4. Implement real-time updates with WebSockets

## 📄 License

This project is part of the LawVriksh Frontend Intern Assignment.

## 🤝 Contributing

This is an assignment project. For any questions, please refer to the assignment guidelines.
