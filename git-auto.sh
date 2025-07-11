#!/bin/bash

# Usage: ./git-auto.sh "Your commit message here"

# Check if a commit message was passed
if [ -z "$1" ]; then
  echo "❌ Commit message is missing."
  echo "Usage: $0 \"Your commit message here\""
  echo "Example: $0 \"feat: add login button to header\""
  exit 1
fi

# Get the current branch name
branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)

# Check if branch was detected
if [ -z "$branch" ]; then
  echo "❌ Could not determine the current git branch."
  echo "Make sure you're inside a Git repository."
  exit 1
fi

echo "🔄 Working on branch: $branch"
echo "📝 Commit message: \"$1\""

# Git workflow
git status
git add .
git commit -m "$1"
git pull origin "$branch"
git push origin "$branch"