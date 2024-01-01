name: Update README

on:
  push:
    paths:
      - '/html/base.html'

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Convert HTML to Markdown
        run: |
          # You need a tool to convert HTML to Markdown. For example, 'pandoc'.
          # Install pandoc if not already installed.
          sudo apt-get update
          sudo apt-get install -y pandoc
          
          # Convert HTML to Markdown
          pandoc base.html -o base.md

      - name: Update README
        run: |
          # Replace the content in your README with the converted Markdown
          cat base.md > README.md
          
          # Commit and push the changes back to the repository
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add README.md
          git commit -m "Update README with base.html content"
          git push
