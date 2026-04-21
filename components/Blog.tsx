import React from "react";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type ResearchPaper = {
	title: string;
	authors: string;
	year: string;
	venue: string;
	keywords: string[];
	abstract: string;
	pdfUrl: string;
};

const papers: ResearchPaper[] = [
	{
		title: "A Theoretical Analysis of Self-Contained Retrieval-Augmented Generation with Small Language Models",
		authors: "Murari Prasad Samal",
		year: "2026",
		venue: "TechRxiv",
		keywords: ["RAG", "Small Language Models", "Theoretical Analysis"],
		abstract:
			"A theoretical study of self-contained retrieval-augmented generation methods tailored for small language models, focusing on retrieval behavior, grounding quality, and reasoning reliability under constrained model capacity.",
		pdfUrl: "https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.177219989.96070478/v1"
	},
	{
		title: "Machine Learning-Based Autonomous Flight Vehicle Trajectory Rectification System: A Comprehensive Framework for Real-Time Path Correction",
		authors: "Murari Prasad Samal",
		year: "2026",
		venue: "TechRxiv",
		keywords: ["Autonomous Flight", "Trajectory Rectification", "Real-Time ML"],
		abstract:
			"A comprehensive machine learning framework for autonomous flight path correction that rectifies trajectory deviations in real time to improve navigation safety, stability, and operational robustness.",
		pdfUrl: "https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.177083679.96594813/v2"
	}
];

const Blog: React.FC = () => {
	return (
		<Section id="blog" className="bg-ivory py-32 overflow-hidden">
			<div className="max-w-7xl mx-auto space-y-12 relative">
				<div className="absolute -top-12 right-0 h-40 w-40 rounded-full bg-gold-200/20 blur-3xl pointer-events-none"></div>

				<header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-charcoal-900 pb-7">
					<div>
						<p className="font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal-500 mb-3">Research Archive</p>
						<h2 className="font-serif text-4xl md:text-5xl text-charcoal-900 leading-tight">Papers & Publications</h2>
					</div>
					<p className="max-w-md text-sm text-charcoal-600 font-sans leading-relaxed">
						A curated list of my published and ongoing research work.
					</p>
				</header>

				<div className="grid md:grid-cols-2 gap-6">
					{papers.map((paper, index) => (
						<motion.article
							key={paper.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
							className="bg-white rounded-2xl border border-charcoal-100 p-6 md:p-7 shadow-sm hover:border-gold-300 transition-colors"
						>
							<div className="flex items-center justify-between gap-3 mb-4">
								<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal-400">{paper.year}</p>
								<span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500 border border-charcoal-200 rounded-full px-2 py-1">
									{paper.venue}
								</span>
							</div>
							<h4 className="font-serif text-2xl text-charcoal-900 leading-tight mb-3">{paper.title}</h4>
							<p className="text-sm text-charcoal-500 mb-3">{paper.authors}</p>
							<p className="text-charcoal-600 text-sm leading-relaxed mb-6">{paper.abstract}</p>
							<div className="flex flex-wrap gap-2 mb-6">
								{paper.keywords.map((tag) => (
									<span key={tag} className="font-mono text-[9px] uppercase tracking-wider border border-charcoal-200 px-2 py-1 text-charcoal-500 bg-ivory rounded-full">
										{tag}
									</span>
								))}
							</div>
							<a
								href={paper.pdfUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-charcoal-900 border-b border-charcoal-900 hover:text-gold-600 hover:border-gold-600 pb-1 transition-colors"
							>
								Read PDF
								<ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
							</a>
						</motion.article>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Blog;
