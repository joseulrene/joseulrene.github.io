{% assign sorted = site.data.moments | sort: "sort" %}
{% for i in sorted %}
    
    [{{i.date}}] [{{i.text}}]({{i.url}})  
    {% if i.bonus %} ~~{{i.bonus}}~~ {% endif %}
    
{% endfor %}

{% capture moment %}
{% endcapture %}
    {{ moment }} 