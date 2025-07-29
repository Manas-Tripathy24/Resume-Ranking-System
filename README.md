# Resume Ranker

A smart web-based application that ranks resumes based on their similarity to a given job description using NLP techniques like TF-IDF and cosine similarity.

## Features

- Upload multiple resumes in PDF format  
- Enter a job description  
- Automatically extracts text and emails from resumes  
- Ranks resumes by matching content relevance to the job description  
- Displays ranking results on the web interface  

## Tech Stack

- Python
- Flask (for the web server)
- spaCy (for NLP)
- scikit-learn (TF-IDF and cosine similarity)
- PyPDF2 (for PDF parsing)

## Requirements

Install dependencies using:

```bash
pip install -r requirements.txt

```
## How It Works

Text is extracted from each resume using PyPDF2

Emails are extracted using regular expressions

The job description and resume text are vectorized using TfidfVectorizer

Cosine similarity measures how closely a resume matches the job description

## Author
Developed by Manas Ranjan Tripathy
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/tripathymanas)