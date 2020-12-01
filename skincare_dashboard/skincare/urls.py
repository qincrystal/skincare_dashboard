from rest_framework import routers
from .api import SkincareViewSet

router= routers.DefaultRouter()
router.register('api/skincare',SkincareViewSet,'skincare')

urlpatterns = router.urls