import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Layers } from 'lucide-react';
import ProjectData from '../Models/Project';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web App', 'AI Automations', 'Cyber Security'];

  const filteredProjects =
    activeFilter === 'All'
      ? ProjectData
      : ProjectData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 bg-[#ECEEEF] relative scroll-mt-20" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold tracking-wider uppercase mb-3 border border-black/10">
              <Layers className="w-3.5 h-3.5 text-black" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-Mona tracking-tight text-black">
              Featured Projects <br className="hidden sm:inline" />
              & Case Studies
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-white/70 p-1.5 rounded-full border border-black/10 backdrop-blur-sm self-start">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab
                    ? 'bg-black text-white shadow-sm'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              {/* Media Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/Hero-bg.png";
                  }}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                {project.metrics && (
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-white/90 text-black backdrop-blur-md shadow-xs">
                      {project.metrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-Mona text-black group-hover:text-gray-700 transition-colors">
                      {project.name}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45"
                      aria-label={`Open ${project.name}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Live Projects Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold font-Mona mb-1">
              Have a tailored project or bespoke idea?
            </h4>
            <p className="text-sm text-gray-400">
              Let's architect custom web solutions, intelligent AI workflows, or run a security audit.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#91FB03] text-black hover:bg-[#80e000] transition-colors shadow-md active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
