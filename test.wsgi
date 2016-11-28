import sys
sys.path.insert(0, '/root/page/app.py')

activate_this = '/root/page/venv/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

from hello import app as application


// 제 경우엔 /home/novafactory/test 경로로 지정을 해 볼게요
import sys
sys.path.insert(0, '/root/page')

activate_this = '/root/page/venv/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

from hello import app as application
