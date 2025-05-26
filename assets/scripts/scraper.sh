# a script to automate collection of data from tolkiengateway, to be used with my bookmarklet

sleep 1.5

for n in {1..350};
do
  ydotool click 0xc0
  ydotool key $(ydokey -k ctrl+meta+down)
  sleep 1
  ydotool key $(ydokey -k ctrl+v)
  ydotool key $(ydokey -k ctrl+meta+up)
  sleep 1
done

ydotool key $(ydokey -k ctrl+s)
