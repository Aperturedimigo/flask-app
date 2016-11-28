import sys
sys.path.insert(0, '/root/page')

activate_this = '/root/page/venv/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

from hello import app as application
