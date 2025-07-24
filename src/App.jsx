import React from "react";
import "./App.css";
import "./index.css";
import profilePic from "./assets/profile_pic.jpg";
import myProfile from "./assets/myprofile.png";
import weatherApi from "./assets/weatherapi.png";

function App() {
  return (
    <main className="font-sans bg-gradient-to-br from-gray-900 to-black text-white min-h-screen px-4 sm:px-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 space-y-4">
        <img
          src={profilePic}
          alt="Subhrajeet Biswas"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transition-all duration-300"
        />
        <h1 className="text-4xl font-bold">Subhrajeet Biswas</h1>
        <p className="max-w-xl text-gray-300">
          Passionate Web Developer with a strong focus on creating modern, responsive, and user-friendly web applications using React, Tailwind CSS, and cutting-edge JavaScript libraries.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills & Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
          {[
            { name: "HTML5", icon: "html" },
            { name: "CSS3", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Vite", icon: "vite" },
            { name: "GitHub", icon: "github" },
            { name: "Git", icon: "git" },
            { name: "C", icon: "c" },
            { name: "Java", icon: "java" },
            { name: "Python", icon: "py" },
            { name: "MySQL", icon: "mysql" },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center hover:scale-110 transition">
              <img
                src={`https://skillicons.dev/icons?i=${tech.icon}`}
                alt={tech.name}
                className="w-10 h-10"
              />
              <span className="mt-1 text-xs text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img src={myProfile} alt="MyPortfolio" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">MyPortfolio</h3>
              <p className="text-gray-300">
                A personal portfolio website showcasing my projects, skills, and contact information built with React and Tailwind.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img src={weatherApi} alt="Weather API" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Weather API</h3>
              <p className="text-gray-300">
                A weather application that fetches real-time weather data using OpenWeatherMap API, built with HTML, CSS and JavaScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/subhrajeet_207" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8" />
          </a>
          <a href="https://www.linkedin.com/in/subhrajeet-biswas-79a415237" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8" />
          </a>
          <a href="https://github.com/subh-ui" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" className="w-8" />
          </a>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Subhrajeet Biswas. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
