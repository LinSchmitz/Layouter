import React from 'react';

function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
        📘 About Layouter
      </h2>

      <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
        <strong>Layouter</strong> is a visual playground for mastering Flexbox
        and CSS Grid — two of the most powerful layout systems in modern web
        development.
      </p>

      <p style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
        Instead of writing layout CSS by hand, Layouter lets you visually adjust
        settings like direction, alignment, and gaps, and instantly see the
        result. It also generates real-time CSS code that you can copy and use
        in your own projects.
      </p>

      <p
        style={{
          fontWeight: 'bold',
          marginTop: '2rem',
          marginBottom: '0.5rem',
        }}
      >
        It’s ideal for:
      </p>

      <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
        <li>🔰 Beginners learning Flexbox & Grid concepts visually</li>
        <li>🧑‍💻 Frontend developers who want a quick layout prototype</li>
        <li>📚 Educators teaching modern CSS layout systems</li>
        <li>⚡️ Anyone who wants to speed up layout experimentation</li>
      </ul>
    </div>
  );
}

export default About;
