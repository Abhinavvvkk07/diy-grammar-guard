# 📝 DIY Grammar Guard

A powerful Chrome extension that provides real-time grammar and writing suggestions, similar to Grammarly, powered by Google's Gemini AI. Get instant feedback on your writing across Gmail, LinkedIn, Outlook, and any text editor on the web.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-8E75B2?style=for-the-badge&logo=google&logoColor=white)

## ✨ Features

### 🎯 **Smart Text Analysis**
- **Real-time grammar checking** as you type
- **Contextual suggestions** powered by Gemini AI
- **Personalized feedback** based on your writing context

### 🔧 **Intelligent Corrections**
- **Full rewrite suggestions** for comprehensive improvements
- **Inline corrections** with red wavy underlines for individual mistakes
- **Hover tooltips** with Accept/Dismiss buttons for quick fixes

### 🌐 **Universal Compatibility**
- ✅ **Gmail Compose** - Works seamlessly in Gmail's rich text editor
- ✅ **LinkedIn DMs** - Perfect for professional messaging
- ✅ **Outlook Web** - Enterprise email support
- ✅ **Text Areas** - Any textarea or contenteditable element
- ✅ **Dynamic Content** - Handles dynamically loaded editors

### 🎨 **Modern UI/UX**
- **Draggable suggestion popups** that don't block your text
- **Grammarly-inspired design** with smooth animations
- **Green Accept / Red Dismiss buttons** for intuitive actions
- **Smart positioning** that adapts to screen boundaries

## 🚀 Installation

### Method 1: Load as Unpacked Extension (Developer Mode)

1. **Download the extension**
   ```bash
   git clone https://github.com/Abhinavvvkk07/diy-grammar-guard.git
   cd diy-grammar-guard
   ```

2. **Open Chrome Extensions**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top right toggle)

3. **Load the extension**
   - Click "Load unpacked"
   - Select the `diy-grammar-guard` folder
   - The extension icon should appear in your toolbar

4. **Get your Gemini API key**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy the key

5. **Configure the extension**
   - Click the extension icon in Chrome toolbar
   - Paste your Gemini API key
   - Optionally add writing context (e.g., "Professional emails", "Academic writing")
   - Click "Save Settings"

## 🔧 Setup & Configuration

### API Key Setup
1. Open the extension popup by clicking the icon
2. Enter your Gemini API key in the "API Key" field
3. Add optional context for personalized suggestions:
   - `"Professional business emails"`
   - `"Academic research papers"`
   - `"Casual social media posts"`
   - `"Technical documentation"`

### Supported Platforms
The extension automatically detects and works on:
- **Gmail** (compose window)
- **LinkedIn** (direct messages, posts)
- **Outlook Web** (compose window)
- **Any website** with text areas or contenteditable elements

## 🎮 How to Use

### Basic Usage
1. **Type in any supported text editor**
2. **Wait 2 seconds** after stopping to type
3. **Review suggestions** in the popup that appears
4. **Accept or dismiss** individual corrections by hovering over red underlines

### Features in Action

#### Full Rewrite Suggestions
- A **draggable popup** appears with comprehensive rewrite suggestions
- **Accept** to replace entire text with improved version
- **Dismiss** to keep your original text
- **Drag the header** to reposition the popup

#### Inline Corrections
- **Red wavy underlines** highlight individual mistakes
- **Hover over underlined text** to see suggestion tooltips
- **Click Accept** (green) to apply the correction
- **Click Dismiss** (red) to ignore the suggestion

## 🏗️ Technical Architecture

### Core Components

```
diy-grammar-guard/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for API calls
├── content.js            # Main content script (DOM manipulation)
├── popup.html/js         # Settings popup interface
├── style.css            # Tooltip and UI styling
└── images/              # Extension icons
```

### Key Technologies
- **Chrome Extension Manifest V3**
- **Google Gemini 1.5 Flash API**
- **Modern JavaScript (ES6+)**
- **CSS3 with animations**
- **MutationObserver** for dynamic content
- **iframe support** for complex web apps

### Smart Features
- **Debounced input** (2-second delay) to avoid excessive API calls
- **Extension context validation** with auto-reload on context loss
- **Intelligent positioning** to prevent off-screen tooltips
- **Event delegation** for dynamically loaded content
- **Cross-frame support** for complex web applications

## 🔒 Privacy & Security

- **Local processing** - No data stored on external servers
- **Direct API calls** - Communications only with Google's Gemini API
- **User-controlled** - API key stored locally in Chrome storage
- **No tracking** - No analytics or user behavior monitoring

## 🛠️ Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/Abhinavvvkk07/diy-grammar-guard.git
cd diy-grammar-guard

# Make changes to the code
# Load as unpacked extension in Chrome for testing
```

### File Structure
- `content.js` - Main logic for text detection and correction UI
- `background.js` - Handles API communication with Gemini
- `popup.js` - Settings interface functionality
- `style.css` - Styling for tooltips and suggestions

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Requirements

- **Chrome Browser** (version 88+)
- **Gemini API Key** (free tier available)
- **Internet connection** for API calls

## 🚨 Known Limitations

- **API Rate Limits** - Gemini free tier has usage limits
- **Internet Required** - Needs connection for grammar checking
- **English Only** - Currently optimized for English text
- **Modern Browsers** - Chrome/Chromium-based browsers only

## 🔮 Roadmap

- [ ] **Offline mode** with local grammar models
- [ ] **Multi-language support** (Spanish, French, German)
- [ ] **Writing style analysis** (tone, readability)
- [ ] **Custom dictionary** for domain-specific terms
- [ ] **Firefox extension** support
- [ ] **Team sharing** of correction preferences

## 📸 Screenshots

### Extension Popup
![Settings Interface](https://via.placeholder.com/600x400/4285F4/FFFFFF?text=Extension+Settings+Interface)

### Inline Corrections
![Inline Corrections](https://via.placeholder.com/600x300/dc3545/FFFFFF?text=Red+Underlines+with+Tooltips)

### Full Rewrite Suggestions
![Full Rewrite](https://via.placeholder.com/600x350/28a745/FFFFFF?text=Draggable+Suggestion+Popup)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the language model
- **Grammarly** for UI/UX inspiration
- **Chrome Extension Community** for best practices

## 📞 Support

If you encounter any issues or have questions:
- **Open an issue** on GitHub
- **Contact**: [LinkedIn](https://linkedin.com/in/abhinav-kumar-993b8028a)

---

⭐ **Star this repository** if you find it helpful!

**Built with ❤️ by [Abhinav Kumar](https://github.com/Abhinavvvkk07)** 