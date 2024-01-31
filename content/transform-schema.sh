#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null
then
    echo "jq could not be found. Please install jq to proceed."
    exit 1
fi

# Check for the correct number of arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <source_file.json> <destination_file.json>"
    exit 1
fi

# Assign arguments to variables
SOURCE_FILE=$1
DESTINATION_FILE=$2

# Transformation logic using jq
jq '
{
  title, 
  author, 
  date, 
  intro, 
  sections: [
    .sections[] | 
    {
      title: .sectionTitle,
      contents: [
        if .content then {"description": .content} else empty end,
        if .image then {"image": .image, "caption": (.caption // "")} else empty end,
        if .code then {"code": .code, "caption": (.caption // "")} else empty end
      ]
    }
  ]
}
' "$SOURCE_FILE" > "$DESTINATION_FILE"

echo "Transformation complete. Output saved to '$DESTINATION_FILE'."
