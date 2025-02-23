# Modern HR Services Web Platform with React and HTML/CSS Implementation

This project is a comprehensive HR services web platform that provides recruitment, staffing, and HR management solutions. It features both a modern React-based implementation and a traditional HTML/CSS version, offering a responsive and interactive user experience with detailed recruitment process workflows, client management, and HR service modules.

The platform showcases company services, recruitment processes, and client interactions through an intuitive interface. It includes features such as automated recruitment workflows, sourcing modules for different educational backgrounds, value propositions for clients, and comprehensive contact management. The application implements modern web development practices with React components for modularity and reusability, while maintaining a clean and professional design aesthetic.

## Repository Structure
```
.
├── Html_css/                      # Traditional HTML/CSS implementation
│   ├── contact.html              # Contact page
│   ├── css/                      # Stylesheet directory
│   ├── index.html               # Main landing page
│   ├── Recruitment.html         # Recruitment process page
│   └── script.js                # JavaScript for Swiper slider
└── React/                        # Modern React implementation
    ├── src/
    │   ├── components/          # Reusable React components
    │   │   ├── Banner.js       # Homepage banner with Swiper
    │   │   ├── Header.js       # Navigation header
    │   │   └── [Other].js      # Various feature components
    │   ├── pages/              # Main page components
    │   │   ├── Home.js         # Homepage container
    │   │   ├── Contact.js      # Contact page
    │   │   └── Recruitment.js  # Recruitment process page
    │   └── App.js              # Main React application component
    └── package.json            # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)
- Modern web browser with JavaScript enabled

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to React implementation
cd React

# Install dependencies
npm install

# Start development server
npm start
```

### Quick Start
1. After installation, the React development server will start at `http://localhost:3000`
2. Navigate through the main sections using the header navigation:
   - Home
   - Recruitment Process
   - Our Client
   - Contact Us

### More Detailed Examples
#### Using the Recruitment Process Feature
```javascript
// Import the RecruitmentProcess component
import RecruitmentProcess from '../components/RecruitmentProcess';

// Implement in your page
function RecruitmentPage() {
  return (
    <div>
      <Header />
      <RecruitmentProcess />
      <Footer />
    </div>
  );
}
```

#### Implementing the Banner Slider
```javascript
// Initialize Swiper slider
const swiper = new Swiper("#main-slider", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  speed: 1000
});
```

### Troubleshooting
#### Common Issues
1. Swiper Slider Not Working
   - Error: "Swiper is not defined"
   - Solution: Ensure Swiper.js is properly imported and initialized after DOM content is loaded
   ```javascript
   document.addEventListener("DOMContentLoaded", function () {
     // Swiper initialization code
   });
   ```

2. React Router Navigation Issues
   - Error: "Cannot read property 'history' of undefined"
   - Solution: Ensure all route components are wrapped in `BrowserRouter`
   ```javascript
   import { BrowserRouter } from 'react-router-dom';
   
   // In your App.js
   <BrowserRouter>
     <App />
   </BrowserRouter>
   ```

## Data Flow
The application follows a component-based architecture with unidirectional data flow.

```ascii
User Input → Header Navigation → Page Components → Feature Components
     ↑                                                    ↓
     └────────────── State Updates ←───────────────────────
```

Component Interactions:
1. Header component manages navigation between main pages
2. Page components (Home, Recruitment, Contact) orchestrate feature components
3. Feature components (Banner, RecruitmentProcess, etc.) handle specific functionality
4. BackToTop component provides global scroll management
5. All components use React's state management for data updates
6. Swiper integration handles carousel/slider interactions
7. Social components manage external link interactions