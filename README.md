# The IPTN website has moved

This GitHub Pages website is used to redirect visitors from the old website (on GitHub) to the new website (not on GitHub).

➡️ **[Go the to new IPTN website](https://peacetech.group)** ⬅️

## How it works

1. Redirects are specified in the [`redirects.csv`](redirects.csv) file, in the format:

   ```
   /old_url_path/old_page/,https://www.example.com/new_url_path/new_page
   ```

2. Then run [`generate_redirects.py`](generate_redirects.py), e.g. with `python3 generate_redirects.py` to produce redirect files in the [`docs/`](docs/) directory.

3. The [`docs/`](docs/) directory can then be hosted on GitHub pages.
