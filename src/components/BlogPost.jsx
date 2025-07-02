import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()

  // Sample blog post data (in a real app, this would come from an API or CMS)
  const blogPosts = {
    1: {
      id: 1,
      title: "Getting Started with Machine Learning: A Beginner's Guide",
      excerpt: "Dive into the fundamentals of machine learning, from basic concepts to your first model. Perfect for beginners looking to enter the field of data science.",
      author: "Mamdouh Jaber",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Machine Learning",
      tags: ["ML", "Beginner", "Python", "Data Science"],
      content: `
        <h2>Introduction to Machine Learning</h2>
        <p>Machine learning is transforming industries worldwide, and understanding its basics is crucial for anyone interested in data science. In this comprehensive guide, we'll explore the fundamentals of machine learning and help you build your first model.</p>
        
        <h3>What is Machine Learning?</h3>
        <p>Machine learning is a subset of artificial intelligence (AI) that enables computers to learn and make decisions from data without being explicitly programmed for every task. Instead of following pre-written instructions, ML algorithms identify patterns in data and make predictions or decisions based on what they've learned.</p>
        
        <h3>Types of Machine Learning</h3>
        <p>There are three main types of machine learning:</p>
        <ul>
          <li><strong>Supervised Learning:</strong> The algorithm learns from labeled training data to make predictions on new, unseen data.</li>
          <li><strong>Unsupervised Learning:</strong> The algorithm finds hidden patterns in data without labeled examples.</li>
          <li><strong>Reinforcement Learning:</strong> The algorithm learns through trial and error by receiving rewards or penalties for its actions.</li>
        </ul>
        
        <h3>Essential Tools and Libraries</h3>
        <p>To get started with machine learning, you'll need to familiarize yourself with these essential tools:</p>
        <ul>
          <li><strong>Python:</strong> The most popular programming language for ML</li>
          <li><strong>Scikit-learn:</strong> A beginner-friendly ML library</li>
          <li><strong>Pandas:</strong> For data manipulation and analysis</li>
          <li><strong>NumPy:</strong> For numerical computing</li>
          <li><strong>Matplotlib/Seaborn:</strong> For data visualization</li>
        </ul>
        
        <h3>Your First Machine Learning Model</h3>
        <p>Let's walk through creating a simple linear regression model to predict house prices. This example will give you hands-on experience with the ML workflow:</p>
        
        <h4>Step 1: Import Libraries</h4>
        <pre><code>import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error</code></pre>
        
        <h4>Step 2: Load and Explore Data</h4>
        <pre><code># Load your dataset
data = pd.read_csv('house_prices.csv')

# Explore the data
print(data.head())
print(data.info())
print(data.describe())</code></pre>
        
        <h4>Step 3: Prepare the Data</h4>
        <pre><code># Select features and target variable
X = data[['square_feet', 'bedrooms', 'bathrooms']]
y = data['price']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)</code></pre>
        
        <h4>Step 4: Train the Model</h4>
        <pre><code># Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)</code></pre>
        
        <h4>Step 5: Make Predictions and Evaluate</h4>
        <pre><code># Make predictions
predictions = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, predictions)
print(f'Mean Squared Error: {mse}')</code></pre>
        
        <h3>Next Steps</h3>
        <p>Congratulations! You've built your first machine learning model. Here are some next steps to continue your ML journey:</p>
        <ul>
          <li>Experiment with different algorithms (Random Forest, Support Vector Machines)</li>
          <li>Learn about feature engineering and data preprocessing</li>
          <li>Explore cross-validation for better model evaluation</li>
          <li>Practice with real-world datasets from Kaggle</li>
          <li>Study advanced topics like deep learning and neural networks</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Machine learning might seem daunting at first, but with consistent practice and the right resources, anyone can master it. Start with simple projects, gradually work your way up to more complex problems, and don't be afraid to experiment. The field of ML is constantly evolving, so stay curious and keep learning!</p>
      `
    },
    2: {
      id: 2,
      title: "Python Data Analysis: Essential Libraries You Need to Know",
      excerpt: "Explore the most important Python libraries for data analysis including Pandas, NumPy, and Matplotlib. Learn when and how to use each one effectively.",
      author: "Mamdouh Jaber",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Python",
      tags: ["Python", "Pandas", "NumPy", "Data Analysis"],
      content: `
        <h2>The Python Data Analysis Ecosystem</h2>
        <p>Python has become the go-to language for data analysis due to its rich ecosystem of libraries. In this comprehensive guide, we'll explore the essential libraries that every data analyst should know.</p>
        
        <h3>1. NumPy: The Foundation</h3>
        <p>NumPy (Numerical Python) is the foundation of the Python data science stack. It provides support for large, multi-dimensional arrays and matrices, along with mathematical functions to operate on these arrays.</p>
        
        <h4>Key Features:</h4>
        <ul>
          <li>Efficient array operations</li>
          <li>Mathematical functions</li>
          <li>Broadcasting capabilities</li>
          <li>Linear algebra operations</li>
        </ul>
        
        <h4>Example Usage:</h4>
        <pre><code>import numpy as np

# Create arrays
arr = np.array([1, 2, 3, 4, 5])
matrix = np.array([[1, 2], [3, 4]])

# Mathematical operations
mean_value = np.mean(arr)
dot_product = np.dot(matrix, matrix)</code></pre>
        
        <h3>2. Pandas: Data Manipulation Powerhouse</h3>
        <p>Pandas is built on top of NumPy and provides data structures and functions needed for data manipulation and analysis. It's particularly well-suited for working with structured data.</p>
        
        <h4>Key Features:</h4>
        <ul>
          <li>DataFrames and Series</li>
          <li>Data cleaning and transformation</li>
          <li>File I/O operations</li>
          <li>Groupby operations</li>
        </ul>
        
        <h4>Example Usage:</h4>
        <pre><code>import pandas as pd

# Read data
df = pd.read_csv('data.csv')

# Basic operations
df.head()
df.describe()
df.groupby('category').mean()

# Data cleaning
df.dropna()
df.fillna(0)</code></pre>
        
        <h3>3. Matplotlib: Visualization Foundation</h3>
        <p>Matplotlib is the most widely used Python plotting library. It provides a MATLAB-like interface for creating static, animated, and interactive visualizations.</p>
        
        <h4>Example Usage:</h4>
        <pre><code>import matplotlib.pyplot as plt

# Simple plot
plt.plot([1, 2, 3, 4], [1, 4, 2, 3])
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sample Plot')
plt.show()</code></pre>
        
        <h3>4. Seaborn: Statistical Visualization</h3>
        <p>Seaborn is built on matplotlib and provides a high-level interface for drawing attractive statistical graphics.</p>
        
        <h3>5. Scikit-learn: Machine Learning</h3>
        <p>While primarily a machine learning library, scikit-learn also provides excellent tools for data preprocessing and analysis.</p>
        
        <h3>Best Practices</h3>
        <ul>
          <li>Always start with data exploration</li>
          <li>Clean your data before analysis</li>
          <li>Use appropriate data types</li>
          <li>Document your analysis process</li>
          <li>Validate your results</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>These libraries form the core of Python's data analysis ecosystem. Master these tools, and you'll be well-equipped to handle most data analysis tasks. Remember, the key is practice – start with simple datasets and gradually work your way up to more complex analyses.</p>
      `
    }
    // Add more blog posts as needed
  }

  const post = blogPosts[id]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Post Not Found</h1>
          <p className="text-secondary-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 not-prose">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-secondary-600 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Enjoyed this article?
                  </h3>
                  <p className="text-secondary-600">
                    Share it with others who might find it useful.
                  </p>
                </div>
                <button className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </motion.div>

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4" />
                Read More Articles
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
