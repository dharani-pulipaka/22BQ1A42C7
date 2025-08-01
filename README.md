# URL Shortener Project - 22BQ1A42C7

A comprehensive URL shortener application with logging middleware and a React frontend.

## Project Structure

```
22BQ1A42C7/
├── logging-middleware/
│   └── logger.js                 # Centralized logging middleware
├── frontend-test-submission/
│   ├── public/
│   │   └── index.html           # Main HTML template
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ShortenerPage.js # URL shortening interface
│   │   │   └── StatsPage.js     # Statistics and analytics
│   │   ├── utils/
│   │   │   └── logger.js        # Frontend logging utility
│   │   ├── App.js               # Main application component
│   │   └── index.js             # Application entry point
│   └── package.json             # Dependencies and scripts
└── README.md                    # Project documentation
```

## Features

### 🔗 URL Shortener
- **Multiple URL Processing**: Shorten up to 5 URLs simultaneously
- **Custom Shortcodes**: Create personalized short links (3-15 alphanumeric characters)
- **Expiration Control**: Set custom validity periods (default: 30 minutes)
- **URL Validation**: Comprehensive input validation with user-friendly error messages
- **Instant Results**: Real-time shortening with copy-to-clipboard functionality

### 📊 Statistics & Analytics
- **Click Tracking**: Monitor clicks with timestamps, sources, and geographic data
- **Status Monitoring**: Track active, expiring, and expired URLs
- **Detailed Analytics**: View comprehensive click details and patterns
- **Data Management**: Refresh and clear statistics with confirmation dialogs

### 🔄 Smart Redirects
- **Instant Redirects**: Seamless redirection to original URLs
- **Expiration Handling**: Graceful handling of expired links
- **Click Recording**: Automatic analytics collection on each redirect
- **Error Handling**: User-friendly error pages for invalid or missing URLs

### 📝 Comprehensive Logging
- **Multi-level Logging**: INFO, WARN, ERROR, and DEBUG levels
- **Persistent Storage**: Logs saved to localStorage for session persistence
- **Contextual Information**: Rich context data for debugging and monitoring
- **Console Integration**: Styled console output for development

## Technical Implementation

### Frontend Architecture
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for SPA navigation
- **Local Storage**: Persistent data storage without backend dependency
- **Responsive Design**: Mobile-first design with flexible layouts

### Data Management
- **Client-side Storage**: All data stored in browser localStorage
- **Real-time Updates**: Automatic expiration status updates
- **Data Validation**: Comprehensive input validation and sanitization
- **Error Recovery**: Graceful error handling with user feedback

### User Experience
- **Intuitive Interface**: Clean, modern design with clear visual hierarchy
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized rendering and efficient state management

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   cd 22BQ1A42C7/frontend-test-submission
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Usage Guide

### Creating Short URLs

1. **Navigate to the home page**
2. **Enter your long URL** in the "Original URL" field
3. **Optional**: Add a custom shortcode (3-15 characters)
4. **Optional**: Set validity period in minutes
5. **Click "Shorten URL"** to generate your short link
6. **Copy and share** your new short URL

### Managing Multiple URLs

- Click **"Add Another URL"** to process up to 5 URLs simultaneously
- Each form operates independently with its own validation
- Remove individual forms using the **"Remove"** button
- All forms maintain their state during the session

### Viewing Statistics

1. **Navigate to the Statistics page**
2. **View all created URLs** with their status and click counts
3. **Expand click details** to see individual click analytics
4. **Refresh data** to update expiration statuses
5. **Clear all data** when needed (with confirmation)

### Using Short URLs

- **Direct access**: Visit `yourdomain.com/shortcode`
- **Automatic redirect**: Users are redirected after a brief loading screen
- **Click tracking**: Each visit is automatically recorded with analytics
- **Expiration handling**: Expired links show appropriate error messages

## Data Structure

### Shortened URL Object
```javascript
{
  id: "unique-identifier",
  originalUrl: "https://example.com/long-url",
  shortCode: "abc123",
  createdAt: "2024-01-01T12:00:00.000Z",
  expiresAt: "2024-01-01T12:30:00.000Z",
  isExpired: false,
  clickCount: 5,
  clicks: [
    {
      timestamp: "2024-01-01T12:05:00.000Z",
      source: "direct",
      location: "New York, USA",
      userAgent: "Mozilla/5.0..."
    }
  ]
}
```

### Click Analytics
- **Timestamp**: Exact time of click
- **Source**: Traffic source (direct, social, email, search, referral)
- **Location**: Geographic location (simulated)
- **User Agent**: Browser and device information

## Browser Compatibility

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## Security Features

- **Input Validation**: Comprehensive URL and shortcode validation
- **XSS Prevention**: Proper input sanitization and output encoding
- **Data Isolation**: Client-side storage prevents data leakage
- **Error Handling**: Secure error messages without sensitive information

## Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **Efficient Rendering**: Optimized React rendering with proper key usage
- **Memory Management**: Proper cleanup of event listeners and timers
- **Storage Optimization**: Efficient localStorage usage with error handling

## Future Enhancements

- **Backend Integration**: API integration for persistent storage
- **User Authentication**: User accounts and private URLs
- **Advanced Analytics**: Geographic mapping and detailed reports
- **Bulk Operations**: CSV import/export functionality
- **Custom Domains**: Support for custom domain names
- **QR Code Generation**: Automatic QR codes for short URLs

## Development Notes

### Code Organization
- **Modular Structure**: Clear separation of concerns
- **Reusable Components**: DRY principle implementation
- **Consistent Styling**: Unified design system
- **Error Boundaries**: Graceful error handling

### Testing Strategy
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: User flow and interaction testing
- **E2E Tests**: Complete user journey validation
- **Performance Tests**: Load and stress testing

## Support & Maintenance

### Logging & Debugging
- All user actions are logged with appropriate detail levels
- Console output provides real-time debugging information
- Persistent logs help with issue reproduction and analysis

### Error Handling
- Comprehensive error catching and user-friendly messages
- Graceful degradation when features are unavailable
- Clear feedback for all user actions and system states

---

**Student ID**: 22BQ1A42C7  
**Project**: URL Shortener with Logging Middleware  
**Technology Stack**: React, JavaScript, HTML5, CSS3, Local Storage  
**Development Time**: Optimized for rapid development and deployment