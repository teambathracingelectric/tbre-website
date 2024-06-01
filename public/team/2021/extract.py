import os
import re
import shutil


def rename_and_move_images(source_directory, target_directory):
    # Create the target directory if it doesn't exist
    if not os.path.exists(target_directory):
        os.makedirs(target_directory)

    # Loop through all files in the source directory
    for filename in os.listdir(source_directory):
        # Check if the file is an image (you can add more extensions if needed)
        if filename.lower().endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp')):
            # Convert the filename to lowercase
            new_name = filename.lower()

            # Remove initial numbers and replace with underscore
            new_name = re.sub(r'^\d+\.', '', new_name)

            # Replace pluses with underscores
            new_name = new_name.replace('+', '_')

            # Remove leading underscores
            new_name = new_name.lstrip('_')

            # Check if the file ends with _1, _2, _3, etc.
            if re.search(r'_\d+\.(jpg|jpeg|png|gif|bmp)$', new_name):
                print(f'Excluded: {filename}')
                continue

            # Move the file to the new directory with the new name
            shutil.copy2(os.path.join(source_directory, filename), os.path.join(target_directory, new_name))
            print(f'Renamed and moved: {filename} to {new_name}')

# Example usage
source_directory = './www.teambathracingelectric.com-1717191669176'
target_directory = './images'
rename_and_move_images(source_directory, target_directory)
