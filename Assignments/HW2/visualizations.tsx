import React from "react";
import {
  PieChart,
  Pie,
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Market Share Data
const marketShareData = [
  { name: "Spotify", value: 31, color: "#1DB954" },
  { name: "Apple Music", value: 15, color: "#FC3C44" },
  { name: "Amazon Music", value: 13, color: "#00A8E1" },
  { name: "YouTube Music", value: 8, color: "#FF0000" },
  { name: "Others", value: 33, color: "#999999" },
];

// Quarterly Growth Data
const userGrowthData = [
  { quarter: "Q4 2023", mau: 602, revenue: 3248, arpu: 4.42 },
  { quarter: "Q1 2024", mau: 621, revenue: 3357, arpu: 4.48 },
  { quarter: "Q2 2024", mau: 632, revenue: 3392, arpu: 4.53 },
  { quarter: "Q3 2024", mau: 640, revenue: 3516, arpu: 4.71 },
];

// Investment Breakdown Data
const investmentData = [
  { category: "Technology", name: "LLark Enhancement", value: 80 },
  { category: "Technology", name: "Creator Tools", value: 60 },
  { category: "Technology", name: "Infrastructure", value: 40 },
  { category: "Talent", name: "AI Researchers", value: 40 },
  { category: "Talent", name: "Engineers", value: 30 },
  { category: "Talent", name: "Product Dev", value: 20 },
  { category: "GTM", name: "Marketing", value: 30 },
  { category: "GTM", name: "Partnerships", value: 30 },
  { category: "GTM", name: "Developer Relations", value: 20 },
];

// AI Capability Comparison Data
const aiCapabilityData = [
  { subject: "Audio AI Expertise", Spotify: 5, Apple: 3, Amazon: 3 },
  { subject: "Data Scale", Spotify: 5, Apple: 4, Amazon: 4 },
  { subject: "User Base", Spotify: 4, Apple: 3, Amazon: 3 },
  { subject: "AI Infrastructure", Spotify: 3, Apple: 5, Amazon: 5 },
  { subject: "Developer Ecosystem", Spotify: 2, Apple: 4, Amazon: 4 },
];

const ChartContainer = ({ title, children, sources }) => (
  <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-6 text-gray-800">{title}</h2>
    {children}
    <div className="mt-4 text-sm text-gray-600">
      <p className="font-semibold">Sources:</p>
      <ul className="list-disc ml-6">
        {sources.map((source, index) => (
          <li key={index}>{source}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function AppendixVisualizations() {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      {/* Market Share Chart */}
      <ChartContainer
        title="Figure 1: Global Music Streaming Market Share (Q3 2024)"
        sources={[
          "Spotify Q3 2024 Financial Results, Form 6-K Report",
          'MIDiA Research, "Music Market Shares 2024"',
          "Market data compiled from public earnings reports",
        ]}
      >
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={marketShareData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {marketShareData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Growth Metrics Chart */}
      <ChartContainer
        title="Figure 2: Quarterly Growth Metrics"
        sources={[
          "Spotify Quarterly Financial Results (Q4 2023 - Q3 2024)",
          "Reported MAU and ARPU figures from earnings releases",
          "Form 6-K Reports filed with SEC",
        ]}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="mau"
              stroke="#1DB954"
              name="Monthly Active Users (M)"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="arpu"
              stroke="#2E77D0"
              name="ARPU (€)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Investment Breakdown Chart */}
      <ChartContainer
        title="Figure 3: Investment Breakdown (€M)"
        sources={[
          "Internal Financial Analysis",
          "Historical AI development costs (Spotify Engineering Blog, 2024)",
          "Market rates for AI talent (Q3 2024 Financial Results)",
          "Industry benchmarks (Grand View Research, 2024)",
        ]}
      >
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={investmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={45}
              textAnchor="start"
              height={100}
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1DB954">
              {investmentData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.category === "Technology"
                      ? "#1DB954"
                      : entry.category === "Talent"
                      ? "#2E77D0"
                      : "#9B59B6"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* AI Capability Comparison Chart */}
      <ChartContainer
        title="Figure 4: AI Capability Comparison"
        sources={[
          "Spotify Research Publications (2023-2024)",
          "Analysis of public technical documentation",
          "Patent filings and technical specifications",
        ]}
      >
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={aiCapabilityData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 5]} />
            <Radar
              name="Spotify"
              dataKey="Spotify"
              stroke="#1DB954"
              fill="#1DB954"
              fillOpacity={0.6}
            />
            <Radar
              name="Apple"
              dataKey="Apple"
              stroke="#FC3C44"
              fill="#FC3C44"
              fillOpacity={0.6}
            />
            <Radar
              name="Amazon"
              dataKey="Amazon"
              stroke="#00A8E1"
              fill="#00A8E1"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>

      {/* Footer Notes */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-sm text-gray-600">
        <p className="font-bold mb-2">General Notes:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>
            All financial data sourced from audited financial statements and SEC
            filings
          </li>
          <li>
            Market research data compiled from verified third-party sources
          </li>
          <li>
            Technical capabilities assessed based on published research papers
          </li>
          <li>Competitive analysis derived from public company disclosures</li>
          <li>Internal metrics based on Spotify's analytics platforms</li>
        </ul>
        <p className="mt-4 italic">
          For the most current information, please refer to our latest quarterly
          reports and research publications. Historical data may be subject to
          restatement.
        </p>
      </div>
    </div>
  );
}
